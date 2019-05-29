<template>
	<button :type="type" class="ms-button ms-button-default"
		:disabled="disabled"
		:aria-labelledby="ariaLabelledby"
		:aria-describedby="ariaDescribedby"
		:aria-disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-primary': !disabled
			}">
		<slot></slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-aria-button',
	mixins: [mixin],
	props: {
		ariaLabelledby: {
			type: String,
			default: ''
		},
		ariaDescribedby: {
			type: String,
			default: ''
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-default {
	min-width: 80px;
	height: 32px;
	&.ms-button-disabled  {
		background-color: darken($ms-color-white, 4.5%);
	}
}
</style>


