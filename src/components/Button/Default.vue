<template>
	<button
		:class="{
			'ms-button-disabled': disabled
		}"
		:type="attr.type" :disabled="disabled"
		:style="{
			width: width
		}"
	>
		<span class="ms-button-label ms-clearfix"
			:class="{
				'ms-textTruncate': text
			}"
		>
			<i class="ms-icon" :class="[
					icon,
					{
						'ms-button-icon': !text,
					}
				]"
			></i>
			<slot></slot>
		</span>

		<span class="ms-description ms-textTruncate">
			{{ description }}
		</span>
	</button>
</template>

<script>
export default {
	name: 'f-button-default',
	props: {
		attr: {
			type: Object
		},
		disabled: {
			type: Boolean
		},
		text: {
			type: String
		},
		icon: {
			type: String
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

