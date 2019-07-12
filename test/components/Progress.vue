<template>
	<div>
		<h2>
			progress
		</h2>

		<f-progress title="Example title" description="Example description" bar
			:data="data" height="1.2em" size="sm"
		 />
		<f-progress title="Example title" description="Example description"
			:data="value"
		 />

		<f-progress title="Example title" description="Example description"
			indeterminate height="1em" size="lg"
		 />

		<f-progress title="Example title" description="Example description"
			indeterminate 
		 />

		<f-progress title="Example title" description="Example description"
			indeterminate
			:data="value"
		 />
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: {
				value: 10,
				variant: 'warning'
			},
			data: [
				{
					value: 5
				},
				{
					value: 5,
					variant: 'success',
					label: 'success',
					striped: true
				},
				{
					value: 5,
					variant: 'info'
				},
				{
					value: 5,
					variant: 'warning'
				},
				{
					value: 5,
					variant: 'danger'
				},
				{
					value: 5,
					variant: 'secondary'
				},
				{
					value: 70,
					variant: 'dark'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.ms-progress {
	margin-bottom: 10px;
}
</style>


