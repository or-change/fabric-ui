<template>
	<a
		:href="link" :target="target"
		@mouseover="checkItem"
		@mouseout="unCheckItem"
		@mousedown="activeItem"
		@mouseup="unActiveItem"
		:class="{
			'ms-menu-item-disabled': disabled,
			'select': isChecked,
			'active': isActive
		}"
		class="ms-menu-item ms-menu-sub">

		<i v-if="icon !== null" :class="`ms-Icon ms-Icon--${icon}`"></i>
		<span class="text">{{ text }}</span>

		<i class="ms-Icon ms-Icon--ChevronRight ms-ChevronRight"></i>
		<span class="split"></span>

		<f-menu :menu="subMenu"></f-menu>
	</a>
		
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-sub-split',
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

<style lang="scss">
.split{
	float: right;
	height: 100%;
	&::before {
		content: '|';
		line-height: 100%;
		font-size: 1em;
		font-weight: 300;
		color: rgb(200, 198, 196);
	}
}
</style>


