<template>
	<div id="toggle">
		<h2>
			Toggle button
		</h2>

		<f-toggle label="With inline label" text-on="on" text-off="off"
			v-model="value" />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			v-model="value" disabled />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			inline
			v-model="value" />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			inline
			v-model="value" disabled />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			v-model="value" end />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			v-model="value" disabled end />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			inline
			v-model="value" end />

		<f-toggle label="With inline label" text-on="on" text-off="off"
			inline
			v-model="value" disabled  end />
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: false
		}
	}
}
</script>

<style lang="scss">
#toggle {
	.ms-toggle {
		margin-bottom: 10px;
	}
}
</style>

