<template>
	<div>
		<h2>Command Button Bar</h2>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:menu="true"
			:border="false" bar
			text="Create account"
			@click.native="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:border="false" bar
		>

		</f-button>

		<f-button
			tag="a"
			theme="primary"
			href="http://www.baidu.com"
			icon="ms-Icon ms-Icon--Add"
			:menu="true" split :border="false" bar
			text="Create account"
			dropdownDisabled
			@dropdown="toggleMenu('menu2')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%"  />

		</f-button>

		<f-button
			tag="a"
			href="http://www.baidu.com"
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:menu="true" split :border="false" bar
			@click="toggleMenu"
			@dropdown="toggleMenu('menu3')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu3" style="top:100%"  />

		</f-button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>
