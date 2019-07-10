<template>
	<div
		class="ms-dropdown ms-dropdown-md"
		:class="{
			'ms-dropdown-disabled': disabled,
			'ms-dropdown-error': !disabled && error,
			'ms-dropdown-active': !disabled && isShow,
			'ms-dropdown-required': !disabled && required
		}"
	>
		<slot name="dropdown-controller">
			<div class="ms-dropdown-controller"
				@click="toggle"
				ref="dropdownController"
			>
				<div class="ms-dropdown-content">
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

				<span class="ms-dropdown-icon">
					<i class="ms-Icon ms-Icon--ChevronDown"></i>
				</span>
			</div>
			<div
				v-if="error && !isShow"
				class="ms-dropdown-error-message">{{ errorMessage }}</div>
		</slot>

		<slot name="dropdown-options">	
			<div class="ms-dropdown-options" ref="dropdownOptions">
				<f-dropdown-item
					v-for="(item, index) in options"
					:key="index"
					:item="item"
					:multi-select="multiSelect"
					:value="value"
					@change="select"
				/>
			</div>
		</slot>
	</div>
</template>

<script>
const EVENT_TOGGLE = 'fv::toggle::dropdown';

export default {
	name: 'f-dropdown',
	data() {
		return {
			isShow: false
		}
	},
	props: {
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
		show() {
			if (this.disabled) {
				return;
			}

			this.$emit('show');
			this.isShow = true;
			this.$emit('shown');

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
			const controllerEle = this.$refs.dropdownController;

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
		this.$root.$on(EVENT_TOGGLE, this.toggleHandler);
	},
	beforeDestroy() {
		this.$root.$off(EVENT_TOGGLE, this.toggleHandler);
	}
}
</script>
