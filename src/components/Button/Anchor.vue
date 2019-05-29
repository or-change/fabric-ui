<template>
	<a :href="href" :target="target"
		:title="title"
		v-if="!disabled"
		class="ms-button ms-button-default
			ms-button-anchor ms-button-standard">
		<slot></slot>
	</a>
	<button
		:title="title"
		v-else
		class="ms-button ms-button-default
			ms-button-anchor ms-button-disabled">
		<slot></slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-anchor-button',
	mixins: [mixin],
	props: {
		href: {
			type: String,
			default: ''
		},
		target: {
			type: String,
			default: '_blank'
		},
		title :{
			type: String,
			default: ''
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-anchor {
	line-height: 32px;
}
</style>


