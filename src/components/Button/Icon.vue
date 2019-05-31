<template>
	<button :type="type" class="ms-button ms-icon-button"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-icon-button-enabled': !disabled
			}">
		<i :class="`ms-Icon ms-Icon--${iconName}`"></i>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-icon-button',
	mixins: [mixin],
	props: {
		iconName: {
			type: String
		}
	}
}
</script>


<style lang="scss">
@import 'scss/_References.scss';

.ms-icon-button {
	font-weight: $ms-font-weight-regular;
	width: 2 * $ms-icon-size-m;
	height: 2 * $ms-icon-size-m;
	border: none;
	border-radius: 0;
	background-color: transparent;
	padding: 0px;
}

.ms-icon-button-enabled {
	color: $ms-color-blue;
	&:hover {
		color: $ms-color-communicationShade10;
    background-color: $ms-color-gray20;
	}

	&:active {
		color: $ms-color-communicationShade20;
    background-color: $ms-color-gray30;
	}
}
</style>
