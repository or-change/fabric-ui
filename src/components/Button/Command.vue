<template>
	<button 
		:type="type" class="ms-button ms-button-command"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled
			}"
			@click="toggle">
		<i class="ms-Icon ms-Icon--Add add"></i>
		<slot></slot>
		<i v-if="menu" class="ms-Icon ms-Icon--ChevronDown"></i>
		<f-menu
			v-if="menu"
			ref="menu"
			:menu="menu"></f-menu>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-command-button',
	mixins: [mixin],
	props: {
		menu: {
			type: Array,
			default: null
		}
	},
	methods: {
		toggle() {
			const menu = this.$refs.menu;

			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show();
			}
		}
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-command {
	position: relative;
	font-weight: $ms-font-weight-regular;
	padding: 0 4px;
	height: 40px;
	background-color: transparent;
	border-radius: 0;
	color: rgb(50, 49, 48);

	ul.ms-menu {
		top: 100%;
	}

	i {
		color: rgb(96, 94, 92);
		font-weight: normal;
		font-size: 12px;
	}

	.add{
		font-size: 16px;
	}

	&:hover, .add {
		color: rgb(16, 110, 190);
	}

	&.ms-button-disabled {
		color: darken($ms-color-white, 35%);

		i {
			color: darken($ms-color-white, 35%);
		}
	}
}
</style>


