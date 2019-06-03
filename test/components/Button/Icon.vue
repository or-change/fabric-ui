<template>
	<div>
		<h2>Icon Button</h2>

		<f-button
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			theme="primary"
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			theme="primary" disabled
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			:border="false"
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			:border="false" :bar="true"
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			:border="false"
			theme="primary"
			icon="ms-Icon ms-Icon--Emoji2"
		/>

		<f-button
			:border="false"
			theme="primary" disabled
			icon="ms-Icon ms-Icon--Emoji2"
		/>
	</div>
</template>
