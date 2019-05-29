<template>
	<button :type="type" class="ms-button ms-button-default"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-standard': isStandard && !disabled,
			'ms-button-primary': !isStandard && !disabled
			}">
		<slot></slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-button',
	mixins: [mixin],
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';
</style>


