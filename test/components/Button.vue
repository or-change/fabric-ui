<template>
	<div>
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
		<h2>command button</h2>
		<f-command-button type="button"
			style="margin-bottom: 50px;"
			:menu="menu">Create account</f-command-button>
		<f-command-button type="button" disabled
			:menu="menu">Create account</f-command-button>
		<f-command-button type="button">Create account</f-command-button>
		<h2>contextual button</h2>
		<f-contextual-button type="button"
			style="margin-bottom: 50px;"
			:menu="menu">New</f-contextual-button>
		<f-contextual-button type="button" disabled
			:menu="menu">New</f-contextual-button>
		
		<h2>split button</h2>

		<f-split-button
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
			disable-click
			disable-dropdown
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
			disable-click
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
		disable-dropdown
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
		variant="primary"
			disable-click
			disable-dropdown
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
		variant="primary"
			disable-click
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
		variant="primary"
		disable-dropdown
			:menu="menu">
			Create account
		</f-split-button>
		<f-split-button
		variant="primary"
			:menu="menu">
			Create account
		</f-split-button>

		<h2>toggle button</h2>
		<f-toggle-button default-text="test1" toggle-text="test2" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					icon: 'Mail',
					text: 'Email message'
				},
				{
					icon: 'Calendar',
					text: 'Calendar event'
				}
			]
		}
	}
}
</script>

