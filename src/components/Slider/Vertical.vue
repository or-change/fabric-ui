<template>
	<div>
		<span v-if="originFromZero" class="ms-slider-zero"
			ref="ms-zero"></span>
		<span class="ms-slider-inactive"
			ref="ms-inactive"></span>
		<span class="ms-slider-active"
			ref="ms-active"></span>
		<span v-if="originFromZero" class="ms-slider-inactive"
			ref="ms-inactive-zero"></span>
		<span
			class="ms-slider-handler"
			ref="ms-handler"
		></span>
	</div>
</template>

<script>
export default {
	name: 'f-slider-vertical',
	props: {
		originFromZero: {
			type: Boolean
		}
	}
}
</script>