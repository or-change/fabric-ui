<template>
	<div
		class="ms-dropdown-item">

		<div
			v-if="!multiSelect"
			@click="select(item.value)">
			<i class="ms-dropdown-item-icon" :class="icon"></i>
			<img class="ms-dropdown-item-icon" :src="image" />
			<span>{{ item.text }}</span>
		</div>

		<f-checkbox
			v-if="multiSelect"
			:label="item.text"
			:value="item.value"
			:disabled="item.disabled"
			v-model="value"
		/>	
	</div>
</template>

<script>
export default {
	name: 'f-dropdown-item'
}
</script>

