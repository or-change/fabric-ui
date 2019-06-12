<template>
	<div class="ms-toggle ms-toggle-md"
		@click="input"
		:class="{
			'ms-toggle-enabled': !disabled,
			'ms-toggle-disabled': disabled,
			'ms-toggle-on': value,
			'ms-toggle-off': !value
		}"
	>
		<label class="ms-toggle-label"
			:class="{
				'ms-toggle-lable-inline': inline
			}"	
			v-if="label && !end">
			<slot name="ms-toggle-label">
				{{ label }}
			</slot>
		</label>

		<button
			class="ms-toggle-button"
			:disabled="disabled"
		></button>

		<label class="ms-toggle-status"
			v-if="statusText">
			<slot name="ms-toggle-status">
				{{ statusText }}
			</slot>
		</label>

		<label class="ms-toggle-label ms-toggle-lable-end"
			:class="{
				'ms-toggle-lable-inline': inline
			}"	
			v-if="label && end">
			<slot name="ms-toggle-label">
				{{ label }}
			</slot>
		</label>
	</div>
</template>

<script>
export default {
	name: 'f-toggle',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		textOn: {
			type: String
		},
		textOff: {
			type: String
		},
		inline: {
			type: Boolean,
			default: false
		},
		end: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		statusText() {
			return this.value ? this.textOn : this.textOff;
		}
	},
	methods: {
		input() {
			if (this.disabled) {
				return;
			}

			this.$emit('input', !this.value);
			this.$emit('change');
		}
	}
}
</script>
