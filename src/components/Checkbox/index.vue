<template>
	<div
		class="ms-checkbox ms-checkbox-md"
		:class="{
			'ms-checkbox-unchecked': !checked,
			'ms-checkbox-checked': checked,
			'ms-checkbox-disabled': disabled,
			'ms-checkbox-enabled': !disabled
		}">
		<label :for="id"
			v-if="!toggle">
			<input 
				type="checkbox"
				:name="name"
				:value="value"
				:id="id"
				:disabled="disabled"
				:checked="checked"
				@change="change"
			/>
			<div
				class="ms-virtual-checkbox"
				:class="{
					'box-right': right
				}">
				<i class="ms-Icon ms-Icon--CheckMark"></i>
			</div>
			<span>{{ label }}</span>
		</label>

		<f-toggle 
			v-if="toggle"
			:disabled="disabled"
			v-model="checked"
			:label="label"
			@change="select(checked)"
			end inline
		/>
	</div>
</template>

<script>
import { type } from 'os';
export default {
	name: 'f-checkbox',
	data() {
		return {
			checked: false
		}
	},
	model: {
		prop: 'selected'
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		value: {
			default: ''
		},
		selected: {
			type: Array,
			default: () => {
				return [];
			}
		},
		label: {
			type: String,
			default: ''
		},
		right: {
			type: Boolean,
			default: false
		},
		toggle: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		selected(newValue) {
			this.isChecked(newValue);
		}
	},
	methods: {
		select(checked) {
			if (this.disabled || !this.selected) {
				return;
			}

			if (checked) {
				this.selected.push(this.value);
			} else {
				this.selected.splice(this.selected.indexOf(this.value), 1);
			}
			
			this.$emit('input', this.selected);

			this.$emit('change', this.selected);
		},
		change(event) {
			this.select(event.target.checked);
		},
		isChecked(selected) {
			if (selected.indexOf(this.value) === -1) {
				this.checked = false;
			} else {
				this.checked = true;
			}
		}
	},
	mounted() {
		this.isChecked(this.selected);
	}
}
</script>

<style lang="scss">
.ms-checkbox {
	.ms-toggle .ms-toggle-label {
    font-weight: 400;
	}
}
</style>

