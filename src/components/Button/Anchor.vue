<template>
	<a
		:href="!disabled && href" :target="target"
		:class="[
			`ms-button-${outlook}`
		]"
		@click="emitCustomEvent('click')"
	>
		<i class="ms-icon" :class="[
				icon,
				{
					'ms-button-icon': !text,
					'ms-hide': !icon && text
				}
			]"
		></i>
		<span class="ms-button-label ms-clearfix"
			:class="{
				'ms-hide': icon && !text
			}"
		>{{ text }}</span>
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
			default: null
		},
		target: {
			type: String,
			default: '_self'
		},
	}
}
</script>
