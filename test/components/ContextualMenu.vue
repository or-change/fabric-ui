<template>
	<div>
		<h2>contextual menu</h2>

		<f-contextual-menu id="contextual-menu-1" ref="contextual-menu" :menu="menu" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					text: '1111111111111',
					secondaryText: '111111111111',
					icon: 'Emoji',
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
					icon: 'Emoji',
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
		show(event) {
			event.preventDefault();
			
			this.$refs['contextual-menu'].show(event.x, event.y);
		}
	},
	mounted() {
		document.body.addEventListener('contextmenu', this.show);
	},
	destroyed() {
		document.body.addEventListener('contextmenu', this.show);
	}
}
</script>
