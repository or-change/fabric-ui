<template>
	<label
		class="ms-label"
		:class="{
			'ms-label-default': !disabled && !required,
			'ms-label-disabled': disabled,
			'ms-label-required': required
		}">
		<slot></slot>
	</label>
</template>

<script>
export default {
	name: 'f-label',
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
