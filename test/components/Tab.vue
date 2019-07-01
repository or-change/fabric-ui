<template>
	<div>
		<h2>Tab</h2>

		<h3>md + link: </h3>
		<f-tabs v-model="value" type="link">
			<f-tab-item title="item-1" icon="ms-Icon ms-Icon--Emoji2" text="item1" />
			<f-tab-item title="item-2" icon="ms-Icon ms-Icon--Emoji2" text="item2" />
		</f-tabs>

		<h3>lg + link: </h3>
		<f-tabs v-model="value" size="lg" type="link">
			<f-tab-item title="item-1" icon="ms-Icon ms-Icon--Emoji2" text="item1" />
			<f-tab-item title="item-2" icon="ms-Icon ms-Icon--Emoji2" text="item2" />
		</f-tabs>

		<h3>md + default</h3>
		<f-tabs v-model="value">
			<f-tab-item title="item-1" icon="ms-Icon ms-Icon--Emoji2" text="item1" />
			<f-tab-item title="item-2" icon="ms-Icon ms-Icon--Emoji2" text="item2" />
		</f-tabs>

		<h3>lg + default</h3>
		<f-tabs v-model="value" size="lg">
			<f-tab-item title="item-1" icon="ms-Icon ms-Icon--Emoji2" text="item1" />
			<f-tab-item title="item-2" icon="ms-Icon ms-Icon--Emoji2" text="item2" />
		</f-tabs>


		<h3>Trigger onchange event</h3>
		<f-tabs v-model="value" size="lg" @change="change">
			<f-tab-item title="item-1" icon="ms-Icon ms-Icon--Emoji2" text="item1" />
			<f-tab-item title="item-2" icon="ms-Icon ms-Icon--Emoji2" text="item2" />
		</f-tabs>

		<h3>Rendering nested components within the Tabs</h3>
		<f-tabs v-model="value">
			<f-tab-item title="item-1">
				<f-button text="click it" @click="show = !show"/>
				<f-callout 
					v-model="show"
					left="32px"
					text="Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom." />
			</f-tab-item>
			<f-tab-item title="item-2"
				text="Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."
			>
			</f-tab-item>
		</f-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null,
			show: false
		}
	},
	methods: {
		change(index) {
			alert(`change to ${index + 1} tab`)
		}
	}
}
</script>

