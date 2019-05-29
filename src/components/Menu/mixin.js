export default {
	data() {
		return {
			isChecked: false,
			isActive: false
		}
	},
	props: {
		icon: {
			type: String,
			default: null
		},
		text: {
			type: String,
			default: ''
		},
		secondaryText: {
			type: String,
			default: ''
		},
		href: {
			type: String
		},
		target: {
			type: String,
			default: '_self'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		link() {
			if (this.disabled) {
				return;
			}

			return this.href;
		}
	},
	methods: {
		checkItem() {
			if (this.disabled) {
				return;
			}

			this.isChecked = true;
		},
		unCheckItem() {
			this.isChecked = false;
		},
		activeItem() {
			if (this.disabled) {
				return;
			}

			this.isActive = true;
		},
		unActiveItem() {
			this.isActive = false;
		}
	}
}