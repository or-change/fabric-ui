<template>
		<a
			:href="link" :target="target"
			class="ms-menu-item ms-menu-sub"
			@mouseover="checkItem"
			@mouseout="unCheckItem"
			@mousedown="activeItem"
			@mouseup="unActiveItem"
			:class="{
				'ms-menu-item-disabled': disabled,
				'select': isChecked,
				'active': isActive
			}">

			<i v-if="icon !== null" :class="`ms-Icon ms-Icon--${icon}`"></i>
			<span class="text">{{ text }}</span>
			<i class="ms-Icon ms-Icon--ChevronRight ms-ChevronRight"></i>

			<f-menu :menu="subMenu"></f-menu>
		</a>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-sub',
	mixins: [mixin],
	props: {
		subMenu: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

