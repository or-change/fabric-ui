<template>
	<div id="app">
		<h2>label</h2>
		<f-label>I'm a Label</f-label>
		<f-label disabled>I'm a Label</f-label>
		<f-label required>I'm a Label</f-label>
		<h2>default-button</h2>
		<f-button>default</f-button>
		<f-button variant="primary">default</f-button>
		<f-button disabled>default</f-button>
		<h2>compound-button</h2>
		<f-compound-button label="Create account" description="You can create a new acount here"></f-compound-button>
		<f-compound-button variant="primary" label="Create account" description="You can create a new acount here"></f-compound-button>
		<f-compound-button disabled label="Create account" description="You can create a new acount here"></f-compound-button>
		<h2>icon button</h2>
		<f-icon-button icon-name="Emoji"></f-icon-button>
		<f-icon-button icon-name="Like" disabled></f-icon-button>
		<h2>action button</h2>
		<f-action-button icon-name="AddFriend">Create account</f-action-button>
		<f-action-button icon-name="AddFriend" disabled>Create account</f-action-button>
		<h2>anchor button</h2>
		<f-anchor-button href="http://Bing.com" title="test">Bing</f-anchor-button>
		<f-anchor-button disabled href="http://Bing.com" title="test">Bing</f-anchor-button>
		<h2>aria button</h2>
		<f-aria-button aria-describedby="id__10482" aria-labelledby="id__10480">Aria description</f-aria-button>
		<f-aria-button disabled aria-describedby="id__10482" aria-labelledby="id__10480">Aria description</f-aria-button>
		<h2>menu</h2>
		<div style="position: relative;margin: 20px 0">
			<f-menu :menu="menu"></f-menu>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					text: '111',
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
					subMenu: []
				},
				{
					text: '111',
					secondaryText: 'test',
					hasIcon: true,
					icon: 'Emoji',
					subMenu: [],
					split: true
				},
				null,
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
			]
		}
	}
}
</script>

<style lang="scss">
#app {
	padding: 20px;
	h2 {
		margin: 20px 0;
	}
}
</style>

