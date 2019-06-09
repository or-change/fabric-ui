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
			<div class="ms-dropdown-options">
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

// 绑定指令
export default {
	name: 'f-dropdown',
	data() {
		return {
			isShow: false
		}
	},
	props: {
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

			this.isShow = true;
		},
		hide() {
			if (this.disabled) {
				return;
			}

			this.isShow = false;
		},
		toggle() {
			if (this.isShow) {
				this.hide();
			} else {
				this.show();
			}
		},
		select(value) {
			if (this.disabled) {
				return;
			}

			this.$emit('input', value);
		}
	},
	computed: {
		result() {
			if (this.value === null || this.value.length === 0) {
				return [{
					text: this.placeholder
				}];
			}
			// 改
			if (typeof this.value === 'string') {
				const item = this.options.filter(item => item && item.value === this.value);
				const { icon, image, text} = item[0];

				return [{
					icon,
					image,
					text
				}];
			}

			if (Array.isArray(this.value)) {
				const result = [];

				this.value.forEach(value => {
					const item = this.options.filter(item => item && item.value === value);
					const { icon, image, text} = item[0];

					result.push({
						icon,
						image,
						text
					});
				})

				return result;
			}
		}
	}
}
</script>
