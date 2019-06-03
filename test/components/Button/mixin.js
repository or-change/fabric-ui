export default {
	data() {
		return {
			menu: [
				{
					icon: 'ms-Icon ms-Icon--Mail',
					text: 'Email message'
				},
				{
					icon: 'ms-Icon ms-Icon--Calendar',
					text: 'Calendar event'
				}
			]
		}
	},
	methods: {
		toggleMenu(ref) {
			const menu = this.$refs[ref];

			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show()
			}
		}
	}
}