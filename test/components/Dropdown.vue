<template>
	<div id="dropdown">
		<h2>Dropdown</h2>

		<f-dropdown
			:options="options"
			v-model="value"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null,
			options: [
				{
					text: 'Fruit'
				},
				{
					text: 'Banana',
					value: 'test item1'
				},
				{
					text: 'Apple',
					value: 'test item2'
				},
				{
					text: 'Orange',
					value: 'test item3'
				},
				null,
				{
					text: 'Vegetable'
				}
			]
		}
	}
}
</script>


<style lang="scss">
#dropdown {
	height: 200px;
}
</style>

