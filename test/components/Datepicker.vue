<template>
	<div>
		<h2>Datepicker</h2>
		<f-datepicker v-model="value" id="p1"/>
		<f-datepicker v-model="value" required id="p2"/>
		<f-datepicker v-model="value" disabled />
		<f-datepicker v-model="value" disabled label="datepicker disabled"/>
		<f-datepicker v-model="value" label="datepicker overlaid" overlaid size="sm" />
		<f-datepicker v-model="value" label="datepicker overlaid" overlaid/>
		<f-datepicker v-model="value" label="datepicker overlaid" overlaid size="lg" />
		<f-datepicker v-model="value" label="datepicker overlaid" overlaid :week-number="true"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null
		}
	}
}
</script>
