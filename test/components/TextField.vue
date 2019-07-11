<template>
	<div>
		<h2>TextField</h2>

		<f-text-field label="Standard" prefix="http://" suffix=".com" icon="ms-Icon ms-Icon--CalendarDay" v-model="value" size="sm"/>
		<f-text-field label="Standard" prefix="http://" suffix=".com" icon="ms-Icon ms-Icon--CalendarDay" v-model="value" />
		<f-text-field label="Standard" prefix="http://" suffix=".com" icon="ms-Icon ms-Icon--CalendarDay" v-model="value"  size="lg"/>
		<f-text-field label="Readonly" prefix="http://" suffix=".com" icon="ms-Icon ms-Icon--CalendarDay" v-model="value" readonly size="sm" />
		<f-text-field label="Disabled" prefix="http://" suffix=".com" icon="ms-Icon ms-Icon--CalendarDay" v-model="value" disabled size="lg" />
		<f-text-field label="Required" prefix="http://" required v-model="value" />
		<f-text-field label="Error" prefix="http://" error msg="Error Message" v-model="value" size="sm" />
		<f-text-field label="Custom" prefix="http://" msg="Click the icon" v-model="value" />
		<f-text-field label="Custom" prefix="http://" msg="Click the icon"  :limit="5" v-model="value"/>
		<f-text-field label="Custom" msg="Click the icon"  :limit="5"
			placeholder="test" v-model="value"
			size="lg"
		/>
		<f-text-field label="multi-standard"
			placeholder="test" multi
			rows="4" cols="4" v-model="value"
		/>

		<f-text-field label="multi-standard"
			placeholder="test" multi
			rows="4" disabled v-model="value"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline v-model="value"
			prefix="http://" size="sm"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline disabled v-model="value"
			size="sm"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline required v-model="value"
			size="sm"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" underline v-model="value"
			prefix="http://"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline disabled v-model="value"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline required v-model="value"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" underline v-model="value"
			prefix="http://"
			size="lg"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline disabled v-model="value"
			size="lg"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" underline required v-model="value"
			size="lg"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" borderless multi v-model="value"
			size="sm"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" borderless v-model="value"
			size="sm"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" borderless multi v-model="value"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" borderless v-model="value"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" borderless multi v-model="value"
			size="lg"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" borderless v-model="value"
			size="lg"
		/>

		<f-text-field label="underlineSStandard"
			placeholder="test" primary required v-model="value"
			size="sm"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" primary required v-model="value"
		/>
		<f-text-field label="underlineSStandard"
			placeholder="test" primary required v-model="value"
			size="lg"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null
		}
	}
}
</script>

