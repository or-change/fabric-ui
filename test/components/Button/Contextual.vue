<template>
	<div>
		<h2>Contextual Button</h2>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="New"
			@click.native="toggleMenu('menu1')"
			dropdown
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="New"
			@click.native="toggleMenu('menu2')"
			dropdown
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>

		<f-button
			:disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="New"
			@click="toggleMenu"
			dropdown
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="New"
			@click="toggleMenu"
			dropdown
		>
			<div slot="menu"></div>

		</f-button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>

