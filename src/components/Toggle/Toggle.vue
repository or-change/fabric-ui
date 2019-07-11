<template>
	<div class="ms-toggle"
		@click="input"
		:class="[
			`ms-toggle-${computedSize}`,
			{
				'ms-toggle-enabled': !disabled,
				'ms-toggle-disabled': disabled,
				'ms-toggle-on': value,
				'ms-toggle-off': !value
			}
		]"
	>
		<div class="ms-toggle-label"
			:class="{
				'ms-toggle-lable-inline': inline
			}"	
			v-if="label && !end">
			<slot name="ms-toggle-label">
				<f-label :size="computedSize">{{ label }}</f-label>
			</slot>
		</div>

		<button
			class="ms-toggle-button"
			:disabled="disabled"
		></button>

		<div class="ms-toggle-status"
			v-if="statusText">
			<slot name="ms-toggle-status">
				<f-label :size="computedSize">{{ statusText }}</f-label>
			</slot>
		</div>

		<div class="ms-toggle-label ms-toggle-lable-end"
			:class="{
				'ms-toggle-lable-inline': inline
			}"	
			v-if="label && end">
			<slot name="ms-toggle-label">
				<f-label :size="computedSize">{{ label }}</f-label>
			</slot>
		</div>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-toggle',
	mixins: [mixin],
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

			this.$emit('change', !this.value);
		}
	}
}
</script>
