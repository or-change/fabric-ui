<template>
	<div>
		<h2>Datepicker</h2>
		<f-datepicker v-model="value" />
		<f-datepicker v-model="value" required />
		<f-datepicker v-model="value" disabled />
		<f-datepicker v-model="value" disabled label="datepicker disabled"/>
		<f-datepicker v-model="value" label="datepicker overlaid" overlaid/>
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
