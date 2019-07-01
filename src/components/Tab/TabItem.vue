<template>
	<div>
		<slot>
			<f-label>{{ text }}</f-label>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'f-tab-item',
	props: {
		text: {
			type: String
		}
	}
}
</script>
