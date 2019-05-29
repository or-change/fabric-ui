<template>
	<a
		:href="link" :target="target"
		class="ms-menu-item"
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
		<span v-if="secondaryText" class="secondary-text">{{ secondaryText }}</span>
	</a>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-item',
	mixins: [mixin],
	props: {
		secondaryText: {
			type: String,
			default: ''
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>


