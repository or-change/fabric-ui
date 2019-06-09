<template>
	<div id="dropdown">
		<h2>Dropdown</h2>

		<f-dropdown
			:options="options"
			v-model="value"
		/>

		<f-dropdown
			:options="options"
			v-model="value"
			error
		/>

		<f-dropdown
			:options="options"
			v-model="selcted"
			multiSelect
		/>

		<f-dropdown
			:options="options"
			v-model="value"
			disabled
		/>

		<f-dropdown
			:options="options"
			v-model="value"
			required
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null,
			selcted: [],
			options: [
				{
					text: 'Fruit'
				},
				{
					text: 'Banana',
					value: 'test item1',
					icon: 'ms-Icon ms-Icon--ShoppingCart'
				},
				{
					text: 'Apple11111111111111111111111111111111111111111111111111111111',
					value: 'test item21111111111111',
					image: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png'
				},
				{
					text: 'Apple',
					value: 'test item3',
					image: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png'
				},
				{
					text: 'Apple',
					value: 'test item4',
					image: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png'
				},
				{
					text: 'Orange',
					value: 'test item6'
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

