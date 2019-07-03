export default {
	props: {
		text: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: true
		},
		bar: {
			type: Boolean,
			default: false
		},
		variant: {
			type: String,
			default: 'standard'
		},
		icon: {
			type: String,
			default: null
		}
	},
	computed: {
		outlook() {
			return this.disabled ? 'disabled' : this.variant;
		}
	},
	methods: {
		emitCustomEvent(type) {
			this.$emit(type);
		}
	}
};