<template>
	<div
		class="ms-checkbox"
		:class="[
			`ms-checkbox-${computedSize}`,
			{
				'ms-checkbox-unchecked': !checked,
				'ms-checkbox-checked': checked,
				'ms-checkbox-disabled': disabled,
				'ms-checkbox-enabled': !disabled
			}
		]">
		
		<component 
			:is="componentName"
			:name="name"
			:value="value"
			:id="id"
			:disabled="disabled"
			:checked="checked"
			:right="right"
			:label="label"
			v-model="checked"
			@change="select"
			inline
			:end="!right"
			:size="computedSize"
		/>
	</div>
</template>

<script>
import mixin from './mixin';
import globalMixin from '../mixin';

import FCheckboxDefault from './Default';

const TYPE_REG = /(default|toggle)/;

export default {
	name: 'f-checkbox',
	mixins: [mixin, globalMixin], 
	data() {
		return {
			checked: false
		}
	},
	components: {
		FCheckboxDefault
	},
	props: {
		type: {
			type: String,
			default: 'default',
			validator(value) {
				return TYPE_REG.test(value);
			}
		}
	},
	model: {
		prop: 'selected'
	},
	watch: {
		selected(newValue) {
			this.isChecked(newValue);
		}
	},
	computed: {
		componentName() {
			return this.type === 'default' ? 'f-checkbox-default' : 'f-toggle';
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
@import 'scss/_References.scss';

.ms-checkbox {
	.ms-toggle .ms-toggle-label {
    font-weight: $ms-font-weight-regular;
	}
}
</style>

