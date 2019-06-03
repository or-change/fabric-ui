<template>
	<div class="ms-button ms-button-md"
		:class="{
			'ms-button-icon': isIcon,
			'ms-button-border': border,
			'ms-bar': bar,
			'ms-split-button': split,
		}">	

		<a
			v-if="tag === 'a'"
			@click="emitCustomEvent('click')"
			:href="!disabled && href" :target="target"
			class="ms-button-content"
			:class="{
				'ms-compound-button': description,
				'ms-button-standard': isStandard && !disabled,
				'ms-button-primary': !isStandard && !disabled,
				'ms-button-disabled': disabled,
				'ms-split-left': split
			}">

			<i v-if="icon" class="ms-icon" :class="icon"></i>
			<div class="ms-button-label">{{ text }}</div>
			<i v-if="menu && !split" class="ms-Icon ms-Icon--ChevronDown ms-dropdown"></i>

			<div v-if="description" class="ms-description">{{ description }} </div>
		</a>

		<button
			v-if="tag !== 'a'"
			@click="emitCustomEvent('click')"
			:type="type" :disabled="disabled"
			class="ms-button-content"
			:class="{
				'ms-compound-button': description,
				'ms-button-standard': isStandard && !disabled,
				'ms-button-primary': !isStandard && !disabled,
				'ms-button-disabled': disabled,
				'ms-split-left': split
			}">
			<i v-if="icon" class="ms-icon" :class="icon"></i>
			<div class="ms-button-label">{{ text }}</div>
			<i v-if="menu && !split" class="ms-Icon ms-Icon--ChevronDown ms-dropdown"></i>

			<div v-if="description" class="ms-description">{{ description }} </div>
		</button>

		<button
			@click="emitCustomEvent('dropdown')"
			v-if="menu && split"
			:type="type" :disabled="disabledDropdown"
			class="ms-button-content ms-split-right"
			:class="{
				'ms-compound-button': description,
				'ms-button-standard': isStandard && !disabledDropdown,
				'ms-button-primary': !isStandard && !disabledDropdown,
				'ms-button-disabled': disabledDropdown
			}">

			<span class="split"></span>
			<i class="ms-Icon ms-Icon--ChevronDown ms-dropdown"></i>
		</button>

		<slot name="menu"></slot>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-button',
	mixins: [mixin],
	props: {
		tag: {
			type: String,
			default: 'button'
		},
		text: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		},
		type: {
			type: String,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
		theme: {
			type: String,
			validator: function (value) {
				return ['standard', 'primary'].indexOf(value) !== -1
			},
			default: 'standard'
		},
		border: {
			type: Boolean,
			default: true
		},
		bar: {
			type: Boolean,
			default: false
		},
		menu: {
			type: Boolean,
			default: false
		},
		split: {
			type: Boolean,
			default: false
		},
		disabledDropdown: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isIcon() {
			return this.icon && !this.text && !this.description
		}
	},
	methods: {
		emitCustomEvent(type) {
			this.$emit(type);
		}
	}
}
</script>