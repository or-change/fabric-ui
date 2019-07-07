<template>
	<a
		:href="!disabled && attr.href" :target="attr.target"
		:style="{
			width: width
		}"
		:class="{
			'ms-button-disabled': disabled
		}"
	>
		<span class="ms-button-label ms-textTruncate ms-clearfix">
			<i class="ms-icon" :class="[
					icon,
					{
						'ms-button-icon': !text
					}
				]"
			></i>
			{{ text }}
		</span>

		<span class="ms-description">
			{{ description }}
		</span>
	</a>
</template>

<script>
export default {
	name: 'f-button-link',
	props: {
		attr: {
			type: Object
		},
		text: {
			type: String
		},
		icon: {
			type: String
		},
		disabled: {
			type: Boolean
		},
		width: {
			type: String
		},
		description: {
			type: String
		}
	}
}
</script>
