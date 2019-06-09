<template>
	<div
		v-if="!item"
		class="ms-dropdown-divider"
	></div>
	<div
		v-else-if="isHeader(item)"
		class="ms-dropdown-header">
		{{ item.text }}
	</div>
	<div
		v-else
	>
		<slot>
			<button
				v-if="!multiSelect"
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

			<div
				v-if="multiSelect"
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

		</slot>
	</div>
</template>

<script>
export default {
	name: 'f-dropdown-item',
	props: {
		item: {
			type: Object
		},
		multiSelect: {
			type: Boolean,
			default: false
		},
		value: {
			type: [String, Array],
			default: null
		}
	},
	methods: {
		isHeader(item) {
			return !item.value;
		},
		select(value) {
			this.$emit('change', value);
		}
	}
}
</script>

