<template>
	<div>
		<h2>Radio</h2>

		<f-radio
			label="Option A"
			value="test1"
			v-model="selected"
		/>

		<f-radio
			disabled
			label="Option A"
			value="test2"
			v-model="selected"
		/>

		<f-radio
			image="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png"
			label="Option A"
			value="test3"
			v-model="selected"
		/>

		<f-radio
			icon="ms-Icon ms-Icon--CalendarDay"
			label="Option A"
			value="test4"
			v-model="selected"
		/>

		<f-radio
			disabled
			icon="ms-Icon ms-Icon--CalendarDay"
			label="Option A"
			value="test4"
			v-model="selected"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: null
		}
	}
}
</script>

