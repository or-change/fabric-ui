<template>
	<div id="app">
		<h2>label</h2>
		<f-label>I'm a Label</f-label>
		<f-label disabled>I'm a Label</f-label>
		<f-label required>I'm a Label</f-label>
		<h2>default-button</h2>
		<f-button>default</f-button>
		<f-button variant="primary">default</f-button>
		<f-button disabled>default</f-button>
		<h2>compound-button</h2>
		<f-compound-button label="Create account" description="You can create a new acount here"></f-compound-button>
		<f-compound-button variant="primary" label="Create account" description="You can create a new acount here"></f-compound-button>
		<f-compound-button disabled label="Create account" description="You can create a new acount here"></f-compound-button>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
#app {
	h2 {
		margin: 20px 0;
	}
}
</style>

