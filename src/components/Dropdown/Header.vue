<template>
	<div class="ms-dropdown-header">
		{{ text }}
	</div>
</template>

<script>
export default {
	name: 'f-dropdown-header',
	props: {
		text: {
			type: String
		}
	}
}
</script>
