<template>
	<a
		:href="!disabled && href"
		class="ms-link"
		:class="[
			`ms-link-${computedSize}`,
			{
				'ms-link-disabled': disabled
			}
		]"
		:target="target">
		<slot>
			{{ text }}
		</slot>
	</a>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-link',
	mixins: [mixin],
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
