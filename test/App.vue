<template>
	<div id="app">
		<label-test></label-test>
		<button-test></button-test>
		<menu-test></menu-test>
	</div>
</template>

<script>
import LabelTest from './components/Label';
import ButtonTest from './components/Button';
import MenuTest from './components/Menu';

export default {
	components: {
		ButtonTest, MenuTest, LabelTest
	}
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

