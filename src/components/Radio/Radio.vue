<template>
	<component
		class="ms-radio"
		:class="[
			`ms-radio-${computedSize}`,
			{
				'ms-radio-disabled': disabled,
				'ms-radio-enabled': !disabled
			}
		]"
		:is="type"
		:checked="checked"
		:id="id"
		:disabled="disabled"
		:name="name"
		:label="label"
		:value="value"
		:icon="icon"
		:image="image"
		@change="change"
	/> 
</template>

<script>
import FRadioDefault from './Default';
import FRadioIcon from './Icon';
import FRadioImage from './Image';

import mixin from './mixin';
import GlobalMixin from '../mixin';

export default {
	name: 'f-radio',
	mixins: [mixin, GlobalMixin],
	model: {
		prop: 'selected'
	},
	components: {
		FRadioDefault,
		FRadioIcon,
		FRadioImage
	},
	data() {
		return {
			checked: false
		}
	},
	props: {
		icon: {
			type: String,
			default: null
		},
		image: {
			type: String,
			default: null
		},
		selected: {
			default: null
		}
	},
	computed: {
		type() {
			if (this.icon) {
				return 'f-radio-icon';
			}

			if (this.image) {
				return 'f-radio-image';
			}

			return 'f-radio-default';
		}
	},
	watch: {
		selected(newValue, oldValue) {
			this.isChecked(newValue);
		}
	},
	methods: {
		change(event) {
			if (this.disabled) {
				return;
			}

			this.checked = event.target.checked;

			if (this.checked) {
				this.$emit('input', this.value);
			}
		},
		isChecked(selected) {
			if (selected === this.value) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		}
	},
	mounted() {
		this.isChecked(this.selected);
	}
}
</script>

