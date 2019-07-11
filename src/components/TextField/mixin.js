export default {
	props: {
		value: {
			type: String
		},
		readonly: {
			type: Boolean,
			default: false
		},
		disabled: {
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
		placeholder: {
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
		limit: {
			type: Number,
			default: null
		},
		underline: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		focus() {
			this.$emit('focus');
		},
		blur() {
			this.$emit('blur');
		}
	}
}