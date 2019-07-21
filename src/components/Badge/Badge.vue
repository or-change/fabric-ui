<template>
	<span
		class="ms-badge"
		:class="[
			`ms-badge-${position}`,
			`ms-badge-${computedSize}`,
			`ms-variant-${variant}`
		]"
		:style="{
			'border-radius': radius,
			color
		}"
	>
		<slot>Badge</slot>
	</span>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-badge',
	mixins: [mixin],
	props: {
		radius: {
			type: String,
			default: '0'
		},
		variant: {
			type: String,
			default: 'primary'
		},
		color: {
			type: String,
			default: '#000'
		},
		position: {
			type: String,
			default: 'right'
		}
	}
}
</script>

