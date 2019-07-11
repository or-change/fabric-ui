<template>
	<div
		class="ms-dropdown-item ms-dropdown-item-multi">
		<f-checkbox
			:label="item.text"
			:value="item.value"
			:disabled="item.disabled"
			v-model="value"
		/>

		<i
			v-if="item.icon" class="ms-dropdown-item-icon" :class="item.icon"
		></i>
		<img
			v-if="item.image" class="ms-dropdown-item-icon" :src="item.image"
		/>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-dropdown-item-multi',
	mixins: [mixin]
}
</script>
