<template>
	<li
		@mouseover="select"
		@mouseout="unSelect"
		@mousedown="active"
		@mouseup="unActive">
		<a
			:href="link" :target="target"
			class="ms-menu-item"
			:class="{
				'ms-menu-item-disabled': disabled,
				'select': isSelect,
				'active': isActive
			}">

			<i v-if="icon !== null" :class="`ms-Icon ms-Icon--${icon}`"></i>
			<span class="text">{{ text }}</span>
			<span v-if="secondaryText" class="secondary-text">{{ secondaryText }}</span>
		</a>
	</li>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-item',
	mixins: [mixin],
	computed: {
		secondaryText() {
			return this.options.secondaryText;
		}
	}
}
</script>


