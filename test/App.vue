<template>
	<div id="app">
		<label-test />
		<default-button />
		<compound-button />
		<icon-button />
		<action-button />
		<command-button />
		<achor-button />
		<contextual-button />
		<split-button />
		<command-bar />
		<custom-split-button />
		<toggle-button />
		<menu-test />
		<checkbox />
		<radio />
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>

<style lang="scss">
#app {
	padding: 20px;
	h2 {
		margin: 20px 0;
	}
}
</style>

