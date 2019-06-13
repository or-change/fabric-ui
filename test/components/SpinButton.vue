<template>
	<div>
		<h2>SpinButton</h2>

		<f-spin-button 
			label="Decimal SpinButton"
			icon="ms-Icon ms-Icon--IncreaseIndentLegacy"
			v-model="value"
			:min="-5"
			:max="100"
			end/>

		<f-spin-button 
			label="Decimal SpinButton"
			icon="ms-Icon ms-Icon--IncreaseIndentLegacy"
			v-model="value"
			:min="-5"
			:max="100"
			disabled
			/>

		<div style="width: 300px">
			<f-spin-button 
				label="Decimal SpinButton"
				icon="ms-Icon ms-Icon--IncreaseIndentLegacy"
				v-model="minValue"
				:min="0"
				:max="1"
				:step="0.1"
			/>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			value: 5,
			minValue: 0
		}
	}
}
</script>

<style lang="scss">
.ms-spin-button {
	margin-bottom: 20px;
}
</style>

