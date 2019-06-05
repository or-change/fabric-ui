<template>
	<div
		class="ms-dropdown ms-dropdown-md"
		:class="{
			'ms-dropdown-disabled': disabled,
			'ms-dropdown-error': !disabled && error,
			'ms-dropdown-active': !disabled && isShow,
			'ms-dropdown-required': !disabled && required
		}"
	>
		<slot name="dropdown-controller">
			<div class="ms-dropdown-controller">
				<span>{{ text }}</span>
				<span class="ms-dropdown-icon">
					<i class="ms-Icon ms-Icon--ChevronDown"></i>
				</span>
			</div>
		</slot>

		<div class="ms-dropdown-options">
			<slot name="dropdown-options">
				<div
					v-for="(item, index) in options"
					:key="index"
				>
					<div class="ms-dropdown-divider"
						v-if="!item"
					></div>

					<div
						v-if="item && isHeader(item)"
						class="ms-dropdown-header">{{ item.text }}</div>

					<div v-if="item && !isHeader(item)"
						class="ms-dropdown-item"
						:class="{
							'ms-dropdown-item-active': value === item.value
						}">

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
				</div>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'f-dropdown',
	data() {
		return {
			isShow: false,
			defaultText: 'Select Options',
			
		}
	},
	props: {
		value: {
			type: [String, Array],
			default: null
		},
		options: {
			type: Array
		},
		multiSelect: {
			type: Boolean,
			default: false
		},
		icon: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		ajustable: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		focus() {

		},
		blur() {

		},
		select(value) {
			if (this.disabled) {
				return;
			}

			this.$emit('input', value);
		},
		isHeader(item) {
			return !item.value;
		}
	},
	computed: {
		text() {
			if (this.value === null) {
				return this.defaultText;
			}

			if (Array.isArray(this.value)) {
				return this.value.join(',');
			}

			return this.value;
		}
	}
}
</script>
