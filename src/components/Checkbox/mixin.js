export default {
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
	}
}