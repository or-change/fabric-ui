<template>
	<div>
		<h2>Split Button</h2>

		<f-button
			tag="a"
			href="http://www.baidu.com"
			target="_blank"
			:menu="true"
			:split="true"
			text="Create account"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			theme="primary"
			tag="a"
			href="http://www.baidu.com"
			target="_blank"
			:menu="true"
			:split="true"
			text="Create account"
			@dropdown="toggleMenu('menu2')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>
		<f-button
			theme="primary" disabled :bar="true"
			href="http://www.baidu.com"
			target="_blank"
			:menu="true"
			:split="true"
			text="Create account"
			@dropdown="toggleMenu('menu2')"
		>
			<!-- <f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" /> -->

		</f-button>

		<f-button
			tag="a"
			href="http://www.baidu.com"
			target="_blank"
			:menu="true"
			:split="true"
			:border="false"
			text="Create account"
			dropdownDisabled @dropdown="toggleMenu('menu3')"
			bar
		>
			<f-menu slot="menu" :menu="menu" ref="menu3" style="top:100%" />

		</f-button>

		<f-button
			tag="a"
			href="http://www.baidu.com"
			target="_blank"
			:menu="true"
			:split="true"
			:border="false"
			text="Create account"
			disabled dropdownDisabled @dropdown="toggleMenu('menu3')"
			bar
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
