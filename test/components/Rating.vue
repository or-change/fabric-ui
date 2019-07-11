<template>
	<div>
		<h2>Rating</h2>
		<f-rating
			:max="45" v-model="value1" :unit="10" :step="5" />

		<f-rating :max="5" size="md"
			v-model="value2" />

		<f-rating :max="5" size="lg"
			v-model="value2" />

		<f-rating :max="5" size="lg"
			readonly
			v-model="value2" />

		<f-rating :max="5" size="lg"
			disabled
			v-model="value2" />

		<f-rating :max="5" size="lg"
			icon="ms-Icon ms-Icon--Starburst"
			active-icon="ms-Icon ms-Icon--StarburstSolid"
			v-model="value2" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: 30,
			value2: 5,
			unit: 10,
			step: 6
		}
	}
}
</script>

