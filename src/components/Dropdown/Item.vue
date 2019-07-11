<template>
	<button
		class="ms-dropdown-item"
		:class="{
			'ms-dropdown-item-active': value === item.value
		}"
		@click="select(item.value)">
		<i
			v-if="item.icon" class="ms-dropdown-item-icon" :class="item.icon"
		></i>
		<img
			v-if="item.image" class="ms-dropdown-item-icon" :src="item.image"
		/>
		<span>{{ item.text }}</span>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-dropdown-item',
	mixins: [mixin],
	methods: {
		select(value) {
			this.$emit('change', value);
		}
	}
}
</script>

