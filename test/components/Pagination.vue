<template>
	<div>
		<h2>Pagination</h2>

		<f-pagination :number-of-pages="10" :limit="5" v-model="value" />

		<f-pagination style="margin-top: 10px" :number-of-pages="10" :limit="6" v-model="value" />

		<f-pagination style="margin-top: 10px" :number-of-pages="10" :limit="6" bar v-model="value"/>

		<f-pagination style="margin-top: 10px" :number-of-pages="20" :limit="10" border v-model="value"/>
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
