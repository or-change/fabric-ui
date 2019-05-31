<template>
	<a
		:href="link"
		:target="target"
		:title="title"
		class="ms-button ms-button-default
			ms-button-anchor"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-standard': !disabled
		}">
		<slot></slot>
	</a>
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
	computed: {
		link() {
			if (this.disabled) {
				return;
			}

			return this.href;
		}
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-anchor {
	line-height: 32px;
}
</style>


