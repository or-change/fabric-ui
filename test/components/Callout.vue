<template>
	<div>
		<h2>Callout</h2>

		<div style="height: 100px; position: relative">
			<f-button :text="text" @click.native="show = !show"/>
			<f-callout 
				v-model="show"
				left="32px"
				text="Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom." />
		</div>

		<div style="height: 100px; position: relative">
			<f-button :text="text" @click.native="show = !show" size="sm" />
			<f-callout 
				v-model="show"
				left="32px"
				size="sm"
				text="Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom." />
		</div>

		<div style="height: 100px; position: relative">
			<f-button :text="text" @click.native="show = !show" size="lg"/>
			<f-callout 
				v-model="show"
				left="32px"
				size="lg"
				text="Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom." />
		</div>

		<div style="height: 100px; position: relative">
			<f-button :text="text" @click.native="show = !show"/>
			<f-callout 
				v-model="show"
				left="32px">
				<p>test1</p>
				<p>test2</p>
				<div>
					GOTO microsoft
				</div>
				<div>
					GOTO microsoft
				</div>
			</f-callout>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false
		}
	},
	computed: {
		text() {
			return this.show ? 'hide callout' : 'show callout';
		}
	}
}
</script>

