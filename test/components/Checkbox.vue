<template>
	<div>
		<h2>Checkbox</h2>
		<f-checkbox
			label="Standard checkbox"
			value="test"
			name="test1"
			v-model="selected"
			right
			@change="test"
		/>

		<f-checkbox
			label="Standard checkbox"
			value="test"
			name="test1"
			v-model="selected"
			right
			@change="test"
			size="sm"
		/>

		<f-checkbox
			label="Standard checkbox"
			value="test"
			name="test1"
			v-model="selected"
			right
			@change="test"
			size="lg"
		/>

		<f-checkbox
			label="Standard checkbox"
			value="test"
			name="test1"
			v-model="selected"
			right
			@change="test"
			type="toggle"
		/>
		<f-checkbox
			name="test1"
			value="test2"
			v-model="selected"
			label="Standard checkbox"
			type="toggle"
		/>
		<f-checkbox
			label="Standard checkbox"
			v-model="selected"
		/>
		<f-checkbox
			disabled
			v-model="selected"
			label="Standard checkbox"
		/>
		<f-checkbox
			disabled
			label="Standard checkbox"
		/>

		{{ selected }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: ['test']
		}
	},
	methods: {
		test() {
			console.log(1)
		}
	}
}
</script>

