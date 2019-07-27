<template>
	<div
		class="ms-button-container"
	>
		<div class="ms-button"
			:class="[
				`ms-button-${computedSize}`,
				`ms-button-${variant}`,
				{
					'ms-button-border': border,
					'ms-button-bar': bar,
					'ms-button-compound': description,
					'ms-button-disabled': disabled,
					'ms-button-dropdown': dropdown,
					'ms-button-split': split,
					'ms-button-no-split': !split
				}
			]">

			<component
				ref="button"
				:is="renderText.component"
				:attr="renderText.attr"
				:disabled="disabled"
				:icon="icon"
				:text="text"
				:description="description"
				:width="width"
				@click.stop="clickEmit"
			>
				<slot>{{ text }}</slot>
			</component>

			<f-button-dropdown
				ref="button-dropdown"
				v-if="dropdown"
				:split="split"
				:show-split="showSplit"
				:triangle="triangle"
				:disabled="split ? dropdownDisabled : disabled"
				@click.stop="dropdownEmit"
			/>
		</div>
		<slot name="menu"></slot>
	</div>
</template>

<script>
import FButtonLink from './Link';
import FButtonDefault from './Default';
import FButtonDropdown from './Dropdown';

import mixin from '../mixin';

const TAG_REG = /(button|a)/;
const VARIANT_REG = /(standard|primary)/;

export default {
	name: 'f-button',
	mixins: [mixin],
	data() {
		return {
			menu: null
		}
	},
	components: {
		FButtonLink, FButtonDefault,
		FButtonDropdown
	},
	props: {
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

			return ( this.bar && !this.border && this.variant !== 'primary') || false;
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
		toggleMenu() {
			if (this.menu) {
				this.menu.toggle();
			}
		},
		dropdownEmit(event) {
			if (this.split) {
				this.$emit('dropdown', event);
			} else {
				this.$emit('click', event);
			}
			console.log(this.$slots.menu)
			this.toggleMenu();
		},
		clickEmit(event) {
			this.$emit('click', event);

			if (this.dropdown && !this.split) {
				this.toggleMenu();
			}
		},
		getMenu() {
			if (!this.$slots.menu) {
				return;
			}

			const menuList = this.$slots.menu
				.filter(component => component.componentOptions && component.componentOptions.tag === 'f-menu');
			
			if (menuList.length) {
				this.menu = menuList[0].componentInstance;
			}
		}
	},
	mounted() {
		this.getMenu();
	}
}
</script>
