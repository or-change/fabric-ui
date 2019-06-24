<template>
	<div class="ms-list ms-list-md"
		:class="{
			'ms-list-compact': compact,
			'ms-list-selection-always': isSelectionAlwaysShow,
			'ms-list-selection-hover': !isSelectionAlwaysShow,
			'ms-list-row-variable': rowHeightVariable,
			'ms-list-shimmer': shimmer
		}"
	>
		<div class="ms-list-header">
			<div class="ms-list-header-row">
				<div class="ms-list-check"
					:class="{
						'ms-list-check-checked': isChecked
					}"
				>
					<div class="ms-list-check-content">
						<i class="ms-Icon ms-Icon--CircleRing ms-list-check-circle"></i>
						<i class="ms-Icon ms-Icon--StatusCircleCheckmark ms-list-check-check"></i>
					</div>
				</div>
				<div class="ms-list-header-cell"
					v-for="(field, index) in fields"
					:class="[field.class]"
				>
					{{ field.label }}
				</div>
			</div>
		</div>

		<div class="ms-list-body">
			<div class="ms-list-row"
				v-for="(item, index) in items"
			>
				<div class="ms-list-check"
					:class="{
						'ms-list-check-checked': isChecked
					}"
				>
					<div class="ms-list-check-content">
						<i class="ms-Icon ms-Icon--CircleRing ms-list-check-circle"></i>
						<i class="ms-Icon ms-Icon--StatusCircleCheckmark ms-list-check-check"></i>
					</div>
				</div>

				<div class="ms-list-row-cell"
					v-for="(field, index) in fields"
					:class="[field.class]"
				>
					{{ item[field.key] }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'f-data-list',
	props: {
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
		grouped: {
			type: Boolean,
			default: false
		},
		rowHeightVariable: {
			type: Boolean,
			default: false
		},
		shimmer: {
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
		}
	},
	computed: {
		isChecked() {

		}
	}
}
</script>
  