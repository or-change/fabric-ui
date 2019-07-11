<template>
	<div>
		<h2>Link</h2>

		<f-link
			text="test"
			:href="href"
			target="_self"
			size="sm"
		 />
		<f-link
			text="test"
			:href="href"
			target="_self"
		 />
		<f-link
			text="test"
			:href="href"
			target="_self"
			size="lg"
		 />

		<f-link
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

