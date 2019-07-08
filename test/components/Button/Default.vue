<template>
	<div>
		<h2>Default Button</h2>
		
		<div>
			<f-button
				text="no border or bar button"
				:border="false"
			/>

			<f-button
				text="bar button"
				:border="false"
				:bar="true"
			/>

			<f-button
				text="border-button"
			/>

			<f-button
				text="border-button"
				size="sm"
			/>

			<f-button
				text="border-button"
				size="lg"
			/>

			<f-button
				variant="primary"
				:border="false"
				text="no border and primary button"
			/>

			<f-button
				variant="primary"
				disabled
				:border="false"
				text="primary disabled button"
			/>

			<f-button
				variant="standard"
				disabled
				:border="false"
				text="no border or bar button disabled"
			/>

			<f-button
				variant="standard"
				disabled
				:border="false"
				width="50px"
				text="fixed width no border or bar button disabled"
			/>
		</div>

		<div style="margin-top: 20px">

			<f-button
				tag="a"
				text="no border or bar link"
				:border="false"
			/>

			<f-button
				tag="a"
				text="bar link"
				:border="false"
				:bar="true"
			/>

			<f-button
				tag="a"
				text="border link"
			/>

			<f-button
				tag="a"
				variant="primary"
				:border="false"
				text="no border and primary link"
			/>

			<f-button
				tag="a"
				variant="primary"
				disabled
				:border="false"
				text="primary disabled link"
			/>

			<f-button
				tag="a"
				variant="standard"
				disabled
				:border="false"
				:bar="true"
				text="no border or bar link disabled"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonText: 'button Tag',
			linkText: 'link Tag'
		}
	}
}
</script>

