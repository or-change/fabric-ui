<template>
	<div
		ref="container"
		class="ms-button-container"
	>
		<div class="ms-button"
			:class="[
				`ms-button-${size}`,
				`ms-button-${variant}`,
				{
					'ms-button-border': border,
					'ms-button-bar': bar,
					'ms-button-compound': description,
					'ms-button-disabled': disabled,
					'ms-button-split': split,
					'ms-button-no-split': !split
				}
			]">	

			<component
				:is="renderText.component"
				:attr="renderText.attr"
				:disabled="disabled"
				:icon="icon"
				:text="text"
				:description="description"
				:width="width"
			/>

			<f-button-dropdown
				ref="button-dropdown"
				v-if="dropdown"
				:split="split"
				:show-split="showSplit"
				:triangle="triangle"
				:disabled="split ? dropdownDisabled : disabled"
				:height="dropdownHeight"
				@dropdown="$emit('dropdown')"
			/>
		</div>
		<slot name="menu"></slot>
	</div>
</template>

<script>
import FButtonLink from './Link';
import FButtonDefault from './Default';
import FButtonDropdown from './Dropdown';

const TAG_REG = /(button|a)/;
const SIZE_REG = /(sm|md|lg)/;
const VARIANT_REG = /(standard|primary)/;

export default {
	name: 'f-button',
	data() {
		return {
			dropdownHeight: 'auto'
		}
	},
	components: {
		FButtonLink, FButtonDefault,
		FButtonDropdown
	},
	props: {
		size: {
			type: String,
			default: 'md',
			validator(value) {
				const result = SIZE_REG.test(value)

				if (!result) {
					console.warn('The value of size should be one of sm, md, lg');
				}

				return result;
			}
		},
		type: {
			type: String,
			default: 'button'
		},
		text: {
			type: String,
			default: ''
		},
		tag: {
			type: String,
			default: 'button',
			validator(value) {
				const result = TAG_REG.test(value);

				if (!result) {
					console.warn('The value of tag should be one of a, button');
				}

				return result;
			}
		},
		href: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: 'auto'
		},
		border: {
			type: Boolean,
			default: true
		},
		bar: {
			type: Boolean,
			default: false
		},
		variant: {
			type: String,
			default: 'standard'
		},
		icon: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		},
		dropdown: {
			type: Boolean,
			default: false
		},
		split: {
			type: Boolean,
			default: false
		},
		triangle: {
			type: Boolean,
			default: false
		},
		dropdownDisabled: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		size() {
			this.getDropdownHeight();
		},
		width() {
			this.getDropdownHeight();
		},
		text() {
			this.getDropdownHeight();
		},
		description() {
			this.getDropdownHeight();
		},
		border() {
			this.getDropdownHeight();
		}
	},
	computed: {
		outlook() {
			return this.disabled ? 'disabled' : this.variant;
		},
		showSplit() {
			if (!this.split) {
				return false;
			}

			if (!this.disabled && !this.dropdownDisabled) {
				return true;
			}

			if (this.disabled && this.dropdownDisabled) {
				return true;
			}

			return false;
		},
		renderText() {
			return this.tag === 'a' ? {
				component: 'f-button-link',
				attr: {
					href: this.href,
					target: this.target
				}
			} : {
				component: 'f-button-default',
				attr: {
					type: this.type
				}
			};
		}
	},
	methods: {
		getDropdownHeight() {
			const container = this.$refs.container;
			const dropdown = this.$refs['button-dropdown'];

			this.dropdownHeight = 'auto';

			if (dropdown) {
				this.dropdownHeight = `${container.clientHeight - 2}px`;
			}
		}
	},
	mounted() {
		this.getDropdownHeight();
	}
}
</script>
