<template>
	<div class="ms-text-field"
		:class="[
			`ms-text-field-${computedSize}`,
			{
				'ms-text-field-enabled': !disabled && !error,
				'ms-text-field-disabled': disabled,
				'ms-text-field-readonly': readonly,
				'ms-text-field-required': required,
				'ms-text-field-primary': primary,
				'ms-text-field-standard': !underline,
				'ms-text-field-underline': underline,
				'ms-text-field-borderless': borderless,
				'ms-text-field-error': error,
			}
		]"
	>
		<div class="ms-text-field-label" v-if="label">
			<slot name="ms-text-field-label">
				<f-label :required="required" :size="computedSize">{{ label }}</f-label>
			</slot>
		</div>

		<component
			:is="type"
			:readonly="readonly"
			:disabled="disabled"
			:rows="rows"
			:resize="resize"
			:placeholder="placeholder"
			:prefix="prefix"
			:suffix="suffix"
			:icon="icon"
			:limit="limit"
			:underline="underline"
			@focus="focus"
			@blur="blur"
			@input="change"
			:value="value"
		>
			<slot></slot>
		</component>
		

		<div class="ms-text-field-msg">
			<slot name="ms-text-field-msg">
				<p>{{ msg }}</p>
			</slot>
		</div>
	</div>
</template>

<script>
import mixin from './mixin';
import globalMixin from '../mixin';
import FTextFieldInline from './Inline';
import FTextFieldMulti from './Multi';

export default {
	name: 'f-text-field',
	data() {
		return {
			text: null
		}
	},
	mixins: [mixin, globalMixin],
	components: {
		FTextFieldInline,
		FTextFieldMulti
	},
	props: {
		multi: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		primary: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		},
		borderless: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: null
		},
		msg: {
			type: String,
			default: null
		}
	},
	computed: {
		type() {
			return !this.multi || this.underline ? 'f-text-field-inline' : 'f-text-field-multi';
		}
	},
	methods: {
		change(value) {
			this.$emit('input', value);
		}
	}
}
</script>