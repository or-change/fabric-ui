<template>
	<div>
		<h2>Split Button</h2>

		<f-button
			tag="a"
			href="http://www.baidu.com"
			text="Create account"
			dropdown split
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			text="Create account"
			dropdown split
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>
		<f-button
			variant="primary" disabled :bar="true"
			text="Create account"
			dropdown split
		>
			<!-- <f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" /> -->

		</f-button>

		<f-button
			:border="false"
			text="Create account"
			dropdownDisabled
			bar
			dropdown split
		>
			<f-menu slot="menu" :menu="menu" ref="menu3" style="top:100%" />

		</f-button>

		<f-button
			:border="false"
			text="Create account"
			disabled dropdownDisabled
			bar
			dropdown split
		>
			<f-menu slot="menu" :menu="menu" ref="menu3" style="top:100%" />

		</f-button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>
