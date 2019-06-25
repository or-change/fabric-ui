<template>
	<div>
		<h2>data-list</h2>
		<f-data-list :fields="fields" :items="items" select-mode="multi" v-model="value" />
		<f-data-list :fields="fields" :items="items" select-mode="multi" v-model="value" :compact="true"
			style="margin-top: 20px"
		/>
		<f-data-list :fields="fields" :items="items" select-mode="multi" v-model="value" :row-height-variable="true"
			style="margin-top: 20px"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
				{name: 'test1', value: 'test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11test11'},
				{name: 'test2', value: 'test2'},
				{name: 'test3', value: 'test3'},
				{name: 'test4', value: 'test4'},
				{name: 'test5', value: 'test5'}
			]
		}
	}
}
</script>

