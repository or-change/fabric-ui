<template>
	<div id="app">
		<label-test></label-test>
		<default-button></default-button>
		<compound-button></compound-button>
		<icon-button></icon-button>
		<action-button></action-button>
		<command-button></command-button>
		<achor-button></achor-button>
		<contextual-button></contextual-button>
		<split-button></split-button>
		<command-bar></command-bar>
		<custom-split-button></custom-split-button>
		<toggle-button></toggle-button>
		<menu-test></menu-test>
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

