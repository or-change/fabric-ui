<template>
	<div>
		<f-text-field />
		<f-calendar />
	</div>
</template>

<script>
export default {
	name: 'f-datepicker',
	props: {
		value: {
			type: String
		},
		disabled: {

		},
		label: {
			
		}
	}
}
</script>

