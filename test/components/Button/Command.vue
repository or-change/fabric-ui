<template>
	<div>
		<h2>Command Button</h2>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			:border="false"
			text="Create account"
			@click.native="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			theme="primary"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="Create account"
			@click="toggleMenu('menu2')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>

		<f-button
			:disabled="true"
			theme="primary"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="Create account"
			@click="toggleMenu"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			text="Create account"
			@click="toggleMenu"
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
