<template>
	<div>
		<h2>Command Button Bar</h2>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:border="false" bar
			text="Create account"
			dropdown
			split
		>
			<f-menu id="menu1" slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:border="false" bar
			dropdown
			split
		>

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			:border="false" bar
			text="Create account"
			dropdownDisabled
			dropdown
			split
		>
			<f-menu id="menu2" slot="menu" :menu="menu" ref="menu2" style="top:100%"  />

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:border="false" bar
			@click="toggleMenu"
			dropdown
			split
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
