export default {
	data() {
		return {
			isSelect: false,
			isActive: false
		}
	},
	props: {
		options: {
			type: Object,
			default: null
		}
	},
	computed: {
		link() {
			if (this.options.disabled) {
				return;
			}

			return this.options.href;
		},
		disabled() {
			return this.options.disabled;
		},
		target() {
			return this.options.target ? this.options.target : '_self';
		},
		icon() {
			return this.options.icon;
		},
		text() {
			return this.options.text;
		},
		subMenu() {
			return this.options.subMenu;
		}
	},
	methods: {
		select() {
			if (this.options.disabled) {
				return;
			}

			this.isSelect = true;
			this.$emit('selected', this);
		},
		unSelect() {
			this.isSelect = false;
			this.$emit('unSelect', this);
		},
		active() {
			if (this.options.disabled) {
				return;
			}

			this.isActive = true;
			this.$emit('actived', this);
		},
		unActive() {
			this.isActive = false;
			this.$emit('unActive', this);
		}
	}
}