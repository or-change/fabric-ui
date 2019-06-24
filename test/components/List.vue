<template>
	<div>
		<h2>data-list</h2>
		<f-data-list :fields="fields" :items="items" />
	</div>
</template>

<script>
export default {
	data() {
		return {
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
				{name: 'test1', value: 'test1'},
				{name: 'test2', value: 'test2'},
				{name: 'test3', value: 'test3'},
				{name: 'test4', value: 'test4'},
				{name: 'test5', value: 'test5'}
			]
		}
	}
}
</script>

