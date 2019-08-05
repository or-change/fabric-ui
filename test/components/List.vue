<template>
	<div>
		<h2>data-list</h2>
		<f-data-list :fields="fields" :items="items" select-mode="multi" v-model="value" :visible-rows="9"/>
		<f-data-list :fields="fields" :items="items" select-mode="multi" v-model="value" :compact="true"
			style="margin-top: 20px" :visible-rows="5"
		/>

		<f-pagination :number-of-pages="10" :limit="5" v-model="number" size="sm"/>
		<f-data-list :fields="fields" :items="[items[number - 1]]" select-mode="multi" v-model="value"
			style="margin-top: 20px"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			number: 0,
			value: null,
			fields: [
				{
					label: 'Name',
					class: 'ms-test',
					key: 'name'
				},
				{
					label: 'Value',
					key: 'value'
				}
			],
			items: [
				{name: '1', value: 'test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11'},
				{name: '2', value: 'test2'},
				{name: '3', value: 'test3'},
				{name: '4', value: 'test4'},
				{name: '5', value: 'test5'},
				{name: '6', value: 'test5'},
				{name: '7', value: 'test5'},
				{name: '8', value: 'test5'},
				{name: '9', value: 'test5'},
				{name: '10', value: 'test5'}
			]
		}
	}
}
</script>

