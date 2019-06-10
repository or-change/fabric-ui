<template>
	<div>
		<h2>Link</h2>

		<f-link
			text="test"
			:href="href"
			target="_self"
		 />

		<f-link
		  :is-button="true"
			text="button test"
			:href="href"
			target="_blank"
		 />

		<f-link
			text="test"
			:href="href"
			target="_self"
			disabled />

		<f-link
		  :is-button="true"
			text="button test"
			:href="href"
			target="_blank"
			disabled />
	</div>
</template>

<script>
export default {
	data() {
		return {
			href: 'http://www.baidu.com'
		}
	}
}
</script>

