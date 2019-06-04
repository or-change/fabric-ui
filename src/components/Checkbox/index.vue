<template>
	<div class="ms-checkbox ms-checkbox-md"
		:class="{
			'ms-checkbox-unchecked': !checked,
			'ms-checkbox-checked': checked,
			'ms-checkbox-disabled': disabled,
			'ms-checkbox-enabled': !disabled
		}">
		<label :for="id">
			<div
				class="ms-virtual-checkbox"
				:class="{
					'box-right': boxPosition === 'right'
				}">
				<input 
					type="checkbox"
					:name="name"
					:value="value"
					:id="id"
					:disabled="disabled"
					:checked="checked"
					@input="select"
					@change="$emit('change')"
				/>
				<i class="ms-Icon ms-Icon--CheckMark"></i>
			</div>
			<span>{{ label }}</span>
		</label>
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
		boxPosition: {
			type: String,
			validator: function (value) {
				return ['left', 'right'].indexOf(value) !== -1
			},
			default: 'left'
		}
	},
	watch: {
		selected(newValue) {
			this.isChecked(newValue);
		}
	},
	methods: {
		select(event) {
			if (this.disabled || !this.selected) {
				return;
			}

			if (event.target.checked) {
				this.selected.push(this.value);
			} else {
				this.selected.splice(this.selected.indexOf(this.value), 1);
			}
			
			this.$emit('input', this.selected);
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
