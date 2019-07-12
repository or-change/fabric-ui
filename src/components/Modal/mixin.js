export default {
	props: {
		width: {
			type: String
		},
		position: {
			type: String,
			default: 'right'
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
		variant: {
			type: String,
			default: 'default'
		},
		closeTitle: {
			type: String,
			default: 'Close'
		},
		closeButton: {
			type: Boolean,
			default: true
		},
		okText: {
			type: String,
			default: 'Save'
		},
		cancelText: {
			type: String,
			default: 'Cancel'
		},
		fluid: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		dragStart(event) {
			this.$emit('dragStart', event);
		},
		dragEnd() {
			this.$emit('dragEnd');
		},
		close() {
			this.$emit('close');
		},
		ok() {
			this.$emit('ok');
		},
		cancel() {
			this.$emit('cancel');
		},
		backdropClose() {
			if (this.closeOnBackdrop) {
				this.close();
				this.$emit('backdropClick');
			}
		}
	}
}