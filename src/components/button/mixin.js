export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		variant: {
			validator: function (value) {
        return ['standard', 'primary'].indexOf(value) !== -1
			},
			default: 'standard'
		},
		type: {
			type: String,
			default: 'button'
		}
	},
	computed: {
		isStandard() {
			return this.variant === 'standard';
		}
	}
}