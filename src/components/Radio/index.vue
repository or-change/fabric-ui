<template>
	<div
		class="ms-radio ms-radio-md"
		:class="{
			'ms-radio-default': isDefault,
			'ms-radio-icon': !isDefault,
			'ms-radio-disabled': disabled,
			'ms-radio-enabled': !disabled
		}"
	>
		<label :for="id"
			:class="{
				'ms-radio-checked': checked,
				'ms-radio-unchecked': !checked
			}"
		>
			<input
				type="radio"
				:id="id"
				:disabled="disabled"
				:checked="checked"
				:name="name"
				:value="value"
				@input="select"
			/>
			
			<div class="ms-radio-content">
				<img v-if="image" :src="image" />

				<i v-if="icon" :class="icon"></i>
			</div>

			<span
				:class="{
					'ms-icon-description': !isDefault
				}"
			>{{ label }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'f-radio',
	model: {
		prop: 'selected'
	},
	data() {
		return {
			checked: false
		}
	},
	props: {
		id: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		value: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		selected: {
			default: null
		},
		icon: {
			type: String,
			default: null
		},
		image: {
			type: String,
			default: null
		}
	},
	computed: {
		isDefault() {
			return !this.icon && !this.image;
		}
	},
	watch: {
		selected(newValue, oldValue) {
			if (newValue === this.value) {
				this.checked = true;
			} else {
				this.checked = false;
			}
		}
	},
	methods: {
		select() {
			if (this.disabled) {
				return;
			}


			this.checked = !this.checked;

			if (this.checked) {
				this.$emit('input', this.value);
			}
		}
	},
	mounted() {
		if (this.selected === this.value) {
			this.checked = true;
		}
	}
}
</script>

