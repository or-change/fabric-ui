<template>
	<li
		@mouseenter="show"
		@mouseleave="hide">
		<a
			:href="link" :target="target"
			class="ms-menu-sub"
			:class="{
				'ms-menu-item-disabled': disabled,
				'select': isSelect,
				'active': isActive
			}">

			<i v-if="icon !== null" :class="`ms-Icon ms-Icon--${icon}`"></i>
			<span class="text">{{ text }}</span>
			<i class="ms-Icon ms-Icon--ChevronRight ms-ChevronRight"></i>
		</a>

		<f-menu
			ref="subMenu"
			:menu="subMenu"
		></f-menu>
	</li>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-sub',
	mixins: [mixin],
	methods: {
		show() {
			if (this.disabled) {
				return;
			}

			this.select();
			this.$refs.subMenu.show();
		},
		hide() {
			this.unSelect();
			this.$refs.subMenu.hide();
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
a.ms-menu-sub {
	padding-left: 4px;
}
</style>

