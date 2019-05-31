<template>
	<button
		:type="type" class="ms-button ms-button-default ms-button-contextual"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-standard': !disabled,
			'active': isActive
			}"
		@click="toggle">
		<i class="ms-Icon ms-Icon--Add add"></i>
		<slot></slot>
		<i class="ms-Icon ms-Icon--ChevronDown down"></i>
		<f-menu
			ref="menu"
			:menu="menu"></f-menu>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-contextual-button',
	mixins: [mixin],
	data() {
		return {
			isActive: false
		}
	},
	props: {
		menu: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	methods: {
		toggle() {
			const menu = this.$refs.menu;

			if (menu.isShow) {
				this.isActive = false;

				menu.hide();
			} else {
				this.isActive = true;

				menu.show();
			}
		}
	}
}
</script>

<style lang="scss">

</style>


<style lang="scss">
@import 'scss/_References.scss';

.ms-button-contextual {
	position: relative;

	.down {
		font-size: 12px;
	}

	&.active {
		background-color: rgb(200, 200, 200);
		color: $ms-color-gray190;
	}

	ul.ms-menu {
		top: 33px;
	}
}
</style>

