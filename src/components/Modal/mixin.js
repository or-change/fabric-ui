export default {
	data() {
		return {
			visible: false
		}
	},
	props: {
		id: {
			type: String,
			required: true
		},
		value: {
			type: Boolean,
			default: false
		},
		width: {
			type: String
		},
		draggable: {
			type: Boolean,
			default: false
		},
		overlay: {
			type: Boolean,
			default: true
		},
		overlayTheme: {
			type: String,
			default: 'dark'
		},
		closeOnBackdrop: {
			type: Boolean,
			default: true
		},
		title: {
			type: String
		},
		text: {
			type: String
		},
		centered: {
			type: Boolean,
			default: true
		},
		hideHeader: {
			type: Boolean,
			default: false
		},
		variant: {
			type: String,
			default: 'default'
		},
		stacking: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		close() {
			this.$emit('input', false);
		}
	}
}