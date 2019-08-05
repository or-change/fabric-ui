<template>
	<li
		@mouseover="select"
		@mouseout="unSelect"
		@mousedown="active"
		@mouseup="unActive">
		<slot>
			<a
				:href="link" :target="target"
				class="ms-menu-item"
				:class="{
					'ms-menu-item-disabled': disabled,
					'select': isSelect,
					'active': isActive
				}">

				<i v-if="icon !== null" :class="icon"></i>
				<span class="text">{{ text }}</span>
				<span v-if="secondaryText" class="secondary-text">{{ secondaryText }}</span>
			</a>
		</slot>
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


