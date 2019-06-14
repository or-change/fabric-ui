<template>
	<div>
		<h2>Calendar</h2>
		<f-calendar v-model="date" :min-date="new Date(2019, 4, 1)" :disabledDate="disabledDate" :outline="true" />
		<f-calendar v-model="date" :min-date="new Date(2019, 4, 1)" :disabledDate="disabledDate" :month-only="true" />
		<f-calendar v-model="range" :min-date="new Date(2019, 4, 1)" :range="true" />
		<f-calendar v-model="range" :min-date="new Date(2019, 4, 1)" :range="true" :overlaid="true" />
		<f-calendar v-model="date" :min-date="new Date(2019, 4, 1)" :overlaid="true" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			date: new Date(),
			range: null,
			disabledDate: [
				new Date(2019, 5, 1),
				new Date(2019, 5, 10),
				new Date(2019, 5, 5),
				new Date(2019, 5, 6)
			]
		}
	}
}
</script>
