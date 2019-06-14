<template>
	<div>
		<h2>
			slider
		</h2>

		<f-slider label="Basic example" v-model="value" origin-from-zero :min="-5" />
		<f-slider label="Basic example" v-model="value" origin-from-zero disabled />
		<f-slider label="Basic example" v-model="value" />

		<!-- <div style="height: 100%">
			<f-slider label="Basic" v-model="value" origin-from-zero vertical />
			<f-slider label="Basic" v-model="value" origin-from-zero vertical disabled />
			<f-slider label="Basic" v-model="value" origin-from-zero vertical :min="-5" />
			<f-slider label="Basic" v-model="value" vertical :min="-5" />
		</div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: -5
		}
	}
}
</script>
