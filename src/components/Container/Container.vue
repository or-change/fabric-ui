<template>
	<div
		:class="{
			'ms-container-fluid': fluid,
			'ms-container': !fluid
		}"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'f-container',
	props: {
		fluid: {
			type: Boolean,
			default: false
		}
	}
}
</script>
