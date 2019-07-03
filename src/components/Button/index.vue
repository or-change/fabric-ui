<template>
	<div class="ms-button ms-button-md"
		:class="{
			'ms-button-border': border,
			'ms-bar': bar
		}">	

		<component
			:is="buttonType"
			:type="type"
			:variant="variant"
			:disabled="disabled"
			:icon="icon"
			:text="text"
			:description="description"
			:href="href"
			:target="target"
			:dropdown-disabled="dropdownDisabled"
			@click="emitCustomEvent('click')"
			@dropdown="emitCustomEvent('dropdown')"
		/>

		<slot name="menu"></slot>
	</div>
</template>

<script>
import mixin from './mixin';

import Anchor from './Anchor';
import Compound from './Compound';
import Contextual from './ContextualMenu';
import Default from './Default';
import Split from './Split';

export default {
	name: 'f-button',
	mixins: [mixin],
	components: {
		Anchor,
		Compound, Contextual,
		Default, Split
	},
	props: {
		buttonType: {
			type: String,
			default: 'default'
		},
		description: {
			type: String,
			default: null
		},
		href: {
			type: String,
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
		dropdownDisabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		emitCustomEvent(type) {
			this.$emit(type);
		}
	}
}
</script>
