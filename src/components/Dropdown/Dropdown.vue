<template>
	<div
		class="ms-dropdown"
		:class="[
			`ms-dropdown-${computedSize}`,
			{
				'ms-dropdown-disabled': disabled,
				'ms-dropdown-error': !disabled && error,
				'ms-dropdown-active': !disabled && isShow,
				'ms-dropdown-required': !disabled && required
			}
		]"
		@click.stop
	>
		<slot name="dropdown-controller">
			<f-text-field
				ref="dropdownController"
				class="ms-dropdown-controller"
				:size="computedSize"
				:placeholder="placeholder"
				readonly
				:disabled="disabled"
				icon="ms-Icon ms-Icon--ChevronDown"
			>
				<div class="ms-dropdown-content" @click="toggle">
					<span
						v-for="(item, index) in result" :key="index"
					>
						<i
							v-if="item.icon" class="ms-dropdown-item-icon" :class="item.icon"
						></i>
						<img
							v-if="item.image" class="ms-dropdown-item-icon" :src="item.image"
						/>
						<span>{{ item.text }}</span>
						<span v-if="result[index + 1]">,</span>
					</span>
				</div>
			</f-text-field>
			<div
				v-if="error && !isShow"
				class="ms-dropdown-error-message">{{ errorMessage }}</div>
		</slot>

		<slot name="dropdown-options">	
			<div class="ms-dropdown-options" ref="dropdownOptions">
				<component
					v-for="(item, index) in options"
					:key="index"
					:item="item"
					:value="value"
					:is="getType(item)"
					@change="select"
				/>
			</div>
		</slot>
	</div>
</template>

<script>
const EVENT_TOGGLE = 'fv::toggle::dropdown';

import mixin from '../mixin';
import FDropdownDivider from './Divider';
import FDropdownHeader from './Header';
import FDropdownItem from './Item';
import FDropdownItemMulti from './MultiSelectItem';

export default {
	name: 'f-dropdown',
	data() {
		return {
			isShow: false
		}
	},
	mixins: [mixin],
	components: {
		FDropdownDivider, FDropdownHeader,
		FDropdownItem, FDropdownItemMulti
	},
	props: {
		id: {
			type: String
		},
		dataDropdownName: {
			type: String
		},
		value: {
			type: [String, Array],
			default: null
		},
		options: {
			type: Array
		},
		placeholder: {
			type: String,
			default: 'Select Option'
		},
		errorMessage: {
			type: String,
			default: 'This dropdown has an error.'
		},
		multiSelect: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		ajustable: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		isHeader(item) {
			return !item.value;
		},
		getType(item) {
			if (!item) {
				return 'f-dropdown-divider';
			}

			if (!item.value) {
				return 'f-dropdown-header';
			}

			if (this.multiSelect) {
				return 'f-dropdown-item-multi';
			}

			return 'f-dropdown-item';
		},
		show() {
			if (this.disabled) {
				return;
			}

			this.$emit('show');
			this.isShow = true;
			this.$emit('shown');

			this.$root.$emit('f::dropdown::show', this.id);

			this.$nextTick(() => {
				this.computedPosition();
			});
		},
		hide() {
			if (this.disabled) {
				return;
			}

			this.isShow = false;
			this.$emit('hidden');
		},
		hideSelf(id) {
			if (id !== this.id) {
				this.hide();
			}
		},
		toggle() {
			if (this.isShow) {
				this.hide();
			} else {
				this.show();
			}
		},
		toggleHandler(target, ele) {
			if (target === this.dataDropdownName) {
				this.toggle();
			}
		},
		select(value) {
			if (this.disabled) {
				return;
			}

			this.$emit('input', value);
		},
		getInfo(value = null) {
			const item = this.options.filter(item => item && item.value === value)
				.map(({icon, image, text}) => {
					return {icon, image, text};
				});
				

			return item.length === 0 ? [{
					text: this.placeholder
				}] : item;
		},
		setPosition(top, left) {
			const optionsEle = this.$refs.dropdownOptions;
			const controllerEle = this.$refs.dropdownController;

			optionsEle.style.top = `${top}px`;
			optionsEle.style.left = `${left}px`;
		},
		computedPosition() {
			const optionsEle = this.$refs.dropdownOptions;
			const controllerEle = this.$refs.dropdownController.$el;

			if (!this.ajustable) {
					return;
			}

			const optionsInfo = optionsEle.getBoundingClientRect();
			const controllerInfo = controllerEle.getBoundingClientRect();
			const { clientHeight, clientWidth } = document.documentElement;

			const height = optionsInfo.height + controllerInfo.height;
			const width = controllerInfo.width + optionsInfo.width;

			if (clientHeight >= controllerInfo.top + optionsInfo.height) {
				this.setPosition(controllerInfo.height, 0);
			}	else if (controllerInfo.top >= optionsInfo.height) {
				this.setPosition(-optionsInfo.height, 0);
			} else if (clientWidth >= width + controllerInfo.left) {
				this.setPosition(clientHeight - controllerInfo.top - optionsInfo.height, controllerInfo.width)
			} else if (controllerInfo.left >= optionsInfo.width) {
				this.setPosition(clientHeight - controllerInfo.top - optionsInfo.height, -optionsInfo.width);
			} else {
				this.setPosition(controllerInfo.height, 0);
			}
		}
	},
	computed: {
		result() {
			if (!this.multiSelect) {
				return this.getInfo(this.value);
			}

			if (this.multiSelect) {
				let result = [];

				if (this.value.length === 0) {
					return this.getInfo();
				}

				this.value.forEach(value => {
					result = result.concat(this.getInfo(value));
				});

				return result;
			}
		}
	},
	mounted() {
		document.body.addEventListener('click', this.hide);
		this.$root.$on('f::dropdown::show', this.hideSelf);
	},
	beforeDestroy() {
		document.body.removeEventListener('click', this.hide);
		this.$root.$off('f::dropdown::show', this.hideSelf);
	}
}
</script>
