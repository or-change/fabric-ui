<template>
	<div class="ms-text-field ms-text-field-md"
		:class="{
			'ms-text-field-enabled': !disabled && !error,
			'ms-text-field-disabled': disabled,
			'ms-text-field-readonly': readonly,
			'ms-text-field-required': required,
			'ms-text-field-primary': primary,
			'ms-text-field-standard': !underline,
			'ms-text-field-underline': underline,
			'ms-text-field-borderless': borderless,
			'ms-text-field-error': error,
		}"
	>

		<div class="ms-text-field-label">
			<slot name="ms-text-field-label">
				<label class="ms-label"
					:class="{
						'ms-label-required': required
					}"
				>{{ label }}</label>
			</slot>
		</div>

		<div class="ms-text-field-group-inline" v-if="!multi || underline"
			:style="{'width': width}"
		>
			<div class="ms-text-field-fix" v-if="prefix && !underline">
				<span>{{ prefix }}</span>
			</div>
			<div class="ms-text-field-input">
				<input type="text"
					:readonly="readonly"
					:disabled="disabled"
					:placeholder="placeholder"
					@input="input"
					v-model="text"
					@focus="focus"
					@blur="blur"
				 />
			</div>
			<div class="ms-text-field-icon" v-if="icon">
				<i :class="icon"></i>
			</div>
			<div class="ms-text-field-fix" v-if="suffix && !underline">
				<span>{{ suffix }}</span>
			</div>
		</div>

		<div class="ms-text-field-group-multi" v-if="multi && !underline">
			<textarea name="" id="" :rows="rows"
				:class="{
					'ms-text-area-unresize': !resize
				}"
				:disabled="disabled"
				@input="input"
				v-model="text"
			></textarea>
		</div>

		<div class="ms-text-field-msg">
			<slot name="ms-text-field-msg">
				<p>{{ msg }}</p>
			</slot>
		</div>
	</div>
</template>

<script>
import { StringDecoder } from 'string_decoder';
export default {
	name: 'f-text-field',
	data() {
		return {
			text: null
		}
	},
	props: {
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		multi: {
			type: Boolean,
			default: false
		},
		rows: {
			type: String
		},
		resize: {
			type: Boolean,
			default: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		primary: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		},
		underline: {
			type: Boolean,
			default: false
		},
		borderless: {
			type: Boolean,
			default: false
		},
		limit: {
			type: Number,
			default: null
		},
		placeholder: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		prefix: {
			type: String,
			default: null
		},
		suffix: {
			type: String,
			default: null
		},
		icon: {
			type: String,
			default: null
		},
		msg: {
			type: String,
			default: null
		}
	},
	computed: {
		width() {
			return (!this.prefix && !this.suffix && this.limit) ? `${this.limit + 1}em` : '100%';
		}
	},
	watch: {
		value() {
			this.setText();
		}
	},
	methods: {
		input() {
			let result = this.text;

			if (this.prefix) {
				result = `${this.prefix}${result}`;
			}

			if (this.suffix) {
				result = `${result}${this.suffix}`;
			}

			this.$emit('input', result);
		},
		setText() {
			if (!this.value) {
				return;
			}

			let regExp;

			if (this.prefix && !this.suffix) {
				regExp = new RegExp(`^(${this.prefix})(.*)`);

				return this.text = this.value.match(regExp)[2];
			}

			if (!this.prefix && this.suffix) {
				regExp = new RegExp(`^(.*)(${this.suffix})$`);

				return this.text = this.value.match(regExp)[1];
			}

			if (this.prefix && this.suffix) {
				regExp = new RegExp(`^(${this.prefix})(.*)(${this.suffix})$`);

				return this.text = this.value.match(regExp)[2];
			}

			this.text = this.value;
		},
		focus() {
			this.$emit('focus');
		},
		blur() {
			this.$emit('blur');
		}
	},
	mounted() {
		this.setText();
	}
}
</script>