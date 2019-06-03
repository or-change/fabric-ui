<template>
	<div>
		<h2>button</h2>
		<f-button 
		description="You can create a new account here "
		:bar="true"
			text='Create Account' />
		<f-button 
			theme="primary"
			description="You can create a new account here"
			text='Create Account' />
		<f-button 
			description="You can create a new account here"
			theme="primary" disabled
			text='Create Account' />
		<f-button 
			disabled
			text='Create Account' />
		<f-button 
			:border="false" :bar="true"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false" :bar="true" text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false" text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false" :bar="true"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false" :bar="true" text="Create Account"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			:border="false" text="Create Account"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			disabled
			:border="false" :bar="true"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			disabled
			:border="false" :bar="true" text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend" />
		<f-button 
			disabled
			:border="false" text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend" />
		
		<f-button 
			disabled
			:border="false" text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend" />

		<f-button 
			text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend"
			description="You can create a new account here"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend"
			:border="false" disabled
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			disabled
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			disabledDropdown
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			theme="primary"
			disabledDropdown disabled
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />

		<f-button 
			text="Create Account"
			disabledDropdown disabled
			icon="ms-Icon ms-Icon--AddFriend"
			:menu="true" :split="true" />
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

