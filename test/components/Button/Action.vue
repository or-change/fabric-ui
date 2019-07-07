<template>
	<div>
		<h2>Action Button</h2>

		<div>
			<f-button
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				variant="primary"
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				variant="primary"
				disabled
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				disabled
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>
		</div>

		<div style="margin-top: 10px;">
			<f-button
				tag="a"
				href="http://www.baidu.com"
				target="_blank"
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				tag="a"
				variant="primary"
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				tag="a"
				variant="primary"
				disabled
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>

			<f-button
				tag="a"
				disabled
				href="http://www.baidu.com"
				icon="ms-Icon ms-Icon--AddFriend"
				text="Create account"
				:border="false"
			/>
		</div>
	</div>
</template>
