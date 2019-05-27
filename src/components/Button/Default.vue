<template>
	<button :type="type" class="ms-button ms-button-default"
		:class="{
			'ms-button-disable': disabled,
			'ms-button-standard': isStandard && !disabled,
			'ms-button-primary': !isStandard && !disabled
			}">
		<slot></slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-default {
	min-width: 80px;
	height: 32px;
}
</style>


