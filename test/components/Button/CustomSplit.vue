<template>
	<div>
		<h2>Custom Split Bar</h2>

		<f-button
			icon="ms-Icon ms-Icon--Upload"
			:menu="true" split
			:border="false" bar
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />
		</f-button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>
