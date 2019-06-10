<template>
	<button v-if="isButton"
		:disabled="disabled"
		class="ms-link"
		:class="{
			'ms-link-disabled': disabled
		}"
		@click="link">
		{{ text }}
	</button>
	<a v-else
		:href="!disabled && href"
		class="ms-link"
		:class="{
			'ms-link-disabled': disabled
		}"
		:target="target">
		{{ text }}
	</a>
</template>

<script>
export default {
	name: 'f-link',
	props: {
		href: {
			type: String
		},
		target: {
			type: String,
			default: '_self'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		isButton: {
			type: Boolean,
			default: false
		},
		text: {
			type: String
		}
	},
	methods: {
		link() {
			window.open(this.href, this.target);
		}
	}
}
</script>
