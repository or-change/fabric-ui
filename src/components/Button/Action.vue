<template>
	<button :type="type" class="ms-button ms-action-button"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-action-button-enabled': !disabled
			}">
		<i :class="`ms-Icon ms-Icon--${iconName}`"></i>
		<slot></slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-action-button',
	mixins: [mixin],
	props: {
		iconName: {
			type: String
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-action-button {
	font-weight: $ms-font-weight-regular;
	padding: 0 4px;
	height: 40px;
	background-color: transparent;
	border-radius: 0;
}

.ms-action-button-enabled {
	color: $ms-color-gray160;

	i {
		color: $ms-color-communicationShade10;
	}

	&:hover {
		color: $ms-color-communicationPrimary;
	}

	&:active {
		color: $ms-color-black;
	}
}
</style>

