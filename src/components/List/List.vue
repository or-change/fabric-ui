<template>
	<div ref="ms-list" style="overflow-y: scroll;position: relative">
		<div
			ref="ms-list-table"
			class="ms-list ms-list-md"
			:class="{
				'ms-list-compact': compact,
				'ms-list-selection-hover': !isSelectionAlwaysShow,
				'ms-list-selection-disabled': !selectMode,
				'ms-list-row-variable': false,
				'ms-list-header-locked': headerLocked
			}"
		>
			<div class="ms-list-header" ref="ms-list-header">
				<div class="ms-list-header-row" ref="head-row">
					<div class="ms-list-check"
						ref="head-check"
						:class="{
							'ms-list-check-checked': isSelectAll
						}"
						@click="selectAll"
					>
						<button class="ms-list-check-content" v-if="isMultiSelect">
							<i class="ms-Icon ms-Icon--CircleRing ms-list-check-circle"></i>
							<i class="ms-Icon ms-Icon--StatusCircleCheckmark ms-list-check-check"></i>
						</button>
					</div>
					<slot name="list-header-fields">
						<div class="ms-list-header-cell"
							v-for="(field, index) in fields"
							:ref="`header-${index}-${field.key}`"
							:class="[field.class, {
								'background': preventHover
							}]"
							:style="{
								width: index == 0 ? '320px' : 'auto'
							}"
						>
							{{ field.label }}

							<button class="ms-list-resize"
								v-if="index !== fields.length - 1"
								:ref="`header-${index}-${field.key}-handler`"
								@mouseenter="preventHover = true"
								@mousedown="record(index, field.key, $event)"
								@mousemove="resize"
								@mouseup="preventHover = false;origin = null"
								@mouseout="preventHover = false;origin = null"
							></button>
						</div>
					</slot>
				</div>
			</div>

			<div class="ms-list-body">
				<div class="ms-list-row"
					v-for="(item, index) in renderItem"
					:class="{
						'ms-list-row-checked': isChecked(item)
					}"
					ref="ms-list-row"
				>
					<div class="ms-list-check"
						:class="{
							'ms-list-check-checked': isChecked(item)
						}"
						@click="select(item)"
					>
						<button class="ms-list-check-content">
							<i class="ms-Icon ms-Icon--CircleRing ms-list-check-circle"></i>
							<i class="ms-Icon ms-Icon--StatusCircleCheckmark ms-list-check-check"></i>
						</button>
					</div>

					<slot name="list-body-row">
						<div class="ms-list-row-cell"
							v-for="(field, index) in fields"
							:class="[field.class]"
							:ref="`row-${index}-${field.key}`"
						>
							{{ item[field.key] }}
						</div>
					</slot>
				</div>
			</div>
		</div>
		<div class="ms-list-placeholder" ref="ms-list-placeholder" v-show="visibleRows"></div>
	</div>
</template>

<script>
export default {
	name: 'f-data-list',
	data() {
		const isMulti = this.selectMode === 'multi';

		return {
			preventHover: false,
			origin: null,
			result: isMulti ? [] : null,
			renderItem: [],
			height: null
		}
	},
	props: {
		value: {
			type: [Object, Array],
			default: null
		},
		resizeabled: {
			type: Boolean,
			default: true
		},
		selectMode: {
			type: String,
			default: null //single, multi
		},
		isSelectionAlwaysShow: {
			type: Boolean,
			default: false
		},
		compact: {
			type: Boolean,
			default: false
		},
		rowHeightVariable: {
			type: Boolean,
			default: false
		},
		fields: {
			type: Array,
			default: null
		},
		items: {
			type: Array,
			default: null
		},
		headerLocked: {
			type: Boolean,
			default: false
		},
		visibleRows: {
			type: Number,
			default: null
		}
	},
	computed: {
		isSelectAll() {
			return this.isMultiSelect && this.items && this.result.length === this.items.length;
		},
		isMultiSelect() {
			return this.selectMode === 'multi';
		}
	},
	watch: {
		value() {
			this.result = this.value;
		}
	},
	methods: {
		selectAll() {
			if (this.isSelectAll) {
				this.result = [];

				this.$emit('input', this.result);

				return;
			}
			 
			this.result = [].concat(this.items);

			this.$emit('input', this.result);
		},
		select(item) {
			if (this.isMultiSelect) {
				if (this.isChecked(item)) {
					this.result.splice(this.getIndex(item), 1);

					return
				}

				this.result.push(item);
			} else {
				if (this.isChecked(item)) {
					this.result = null;

					return
				}

				this.result = item;
			}

			this.$emit('input', this.result);
		},
		getIndex(item) {
			if (this.isMultiSelect) {
				let position = -1

				this.result.forEach((selectItem, index) => {
					if (JSON.stringify(selectItem) === JSON.stringify(item)) {
						position = index
					}
				});

				return position;
			}
		},
		isChecked(item) {
			if (this.isMultiSelect) {
				return this.getIndex(item) !== -1;
			} else {
				return JSON.stringify(this.result) === JSON.stringify(item);
			}
		},
		record(index, key, event) {
			const headRow = this.$refs['head-row'].getBoundingClientRect();
			const headCheck = this.$refs['head-check'].getBoundingClientRect();
			const headCell = this.$refs[`header-${index}-${key}`][0].getBoundingClientRect();
			const handler = this.$refs[`header-${index}-${key}-handler`][0].getBoundingClientRect();

			this.origin = {
				index, key,
				headCellWidth: headCell.width,
				handlerLeft: handler.left - headCell.left,
				x: event.x,
				availableWidth: headRow.width - headCheck.width
			}
		},
		resize(event) {
			if (this.origin) {
				const { index, key, headCellWidth, handlerLeft, x, availableWidth } = this.origin;

				const headCell = this.$refs[`header-${index}-${key}`][0];
				const handler = this.$refs[`header-${index}-${key}-handler`][0];

				const offsetX = event.x - x;

				const newWidth = headCellWidth + offsetX;

				if (newWidth >= 120 && newWidth <= availableWidth - (this.fields.length - 1) * 300) {
					headCell.style.width = `${newWidth}px`;
					handler.style.left = `${handlerLeft + offsetX}px`;
				}
			}
		},
		getRenderItems(start = 0) {
			if (!this.visibleRows) {
				this.renderItem = this.items;

				return;
			}

			this.renderItem = this.items.slice(start, start + this.visibleRows);
		},
		computedRenderItem(event) {
			const table = this.$refs['ms-list-table'];

			const scrollTop = event.target.scrollTop;

			table.style.marginTop = `${scrollTop}px`;

			this.getRenderItems(Math.floor((scrollTop / this.height) * this.items.length));
		},
		setHeight() {
			if (!this.visibleRows) {
				return;
			}

			const list = this.$refs['ms-list'];
			const header = this.$refs['ms-list-header'];
			const row = this.$refs['ms-list-row'][0];
			const placeholder = this.$refs['ms-list-placeholder'];

			const headerHeight = header.clientHeight;
			const rowHeight = row.clientHeight;

			list.style.height = `${headerHeight + rowHeight * this.visibleRows}px`;

			this.height = headerHeight + rowHeight * this.items.length;
			placeholder.style.height = `${this.height}px`;


			list.addEventListener('scroll', this.computedRenderItem);
		}
	},
	mounted() {
		this.getRenderItems();

		this.$nextTick(() => {
			this.setHeight();
		});
	},
	destroyed() {
		list.removeEventListener('scroll', 	this.computedRenderItem);
	}
}
</script>
  