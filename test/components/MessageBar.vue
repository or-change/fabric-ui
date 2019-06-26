<template>
	<div>
		<h2>Message Bar</h2>

		<f-message-bar
			closeButton
			toggle
			:text="text" />

		<f-message-bar
		style="margin-top: 10px"
			closeButton
			multiLine
			toggle
			:text="text" />

		<f-message-bar
		style="margin-top: 10px"
		actionButton
			closeButton
			multiLine
			toggle
			:text="text" />

		<f-message-bar
		style="margin-top: 10px"
			closeButton
			multiLine
			:text="text" />

		<f-message-bar
			style="margin-top: 10px"
			variant="error"
			closeButton
			multiLine
			:text="text" />

		<f-message-bar
			style="margin-top: 10px"
			variant="danger"
			closeButton
			multiLine
			:text="text" />

		<f-message-bar
			style="margin-top: 10px"
			variant="warning"
			closeButton
			multiLine
			:text="text" />

		<f-message-bar
			style="margin-top: 10px"
			variant="success"
			closeButton
			:text="text" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: 'Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.'
		}
	}
}
</script>

