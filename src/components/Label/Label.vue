<template>
	<label
		class="ms-label"
		:class="[
			`ms-label-${computedSize}`,
			{
				'ms-label-default': !disabled && !required,
				'ms-label-disabled': disabled,
				'ms-label-required': required
			}
		]">
		<slot></slot>
	</label>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-label',
	mixins: [mixin],
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		}
	}
}
</script>

