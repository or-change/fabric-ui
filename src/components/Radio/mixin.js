export default {
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
		}
	},
	methods: {
		select(event) {
			this.$emit('change', event);
		}
	}
}