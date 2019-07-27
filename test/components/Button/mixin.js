export default {
	data() {
		return {
			menu: [
				{
					text: '1111111111111',
					secondaryText: '111111111111',
					icon: 'ms-Icon ms-Icon--Emoji',
					href: 'http://www.baidu.com',
					disabled: true
				},
				{
					text: '111',
					secondaryText: '111111111111111',
					icon: ''
				},
				{
					text: '111',
					secondaryText: 'test',
					hasIcon: true,
					icon: 'ms-Icon ms-Icon--Emoji',
					subMenu: [
						{
							text: '111',
							secondaryText: 'test',
							hasIcon: true,
							icon: 'Emoji',
							subMenu: [
								{
							text: '111',
							secondaryText: 'test',
							hasIcon: true,
							icon: 'Emoji',
							subMenu: [],
							split: true
						}
							],
							split: true
						}
					]
				},
				{
					text: '111',
					secondaryText: 'test',
					hasIcon: true,
					icon: 'Emoji',
					subMenu: [
						{
							text: '111',
							secondaryText: 'test',
							hasIcon: true,
							icon: 'Emoji',
							subMenu: [],
							split: true
						}
					],
					split: true
				},
				null,
				{
					text: '111',
					secondaryText: 'test',
					hasIcon: true,
					icon: 'Emoji',
					disabled: true,
					subMenu: [
						{
							text: '111',
							secondaryText: 'test',
							hasIcon: true,
							icon: 'Emoji',
							subMenu: [],
							split: true
						}
					],
					split: true
				},
			]
		}
	},
	methods: {
		toggleMenu(ref) {
			const menu = this.$refs[ref];

			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show();
			}
		}
	}
}