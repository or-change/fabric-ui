export default {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		theme: {
			validator: function (value) {
        return ['dark', 'light'].indexOf(value) !== -1
			},
			default: 'dark'
		}
	}
}