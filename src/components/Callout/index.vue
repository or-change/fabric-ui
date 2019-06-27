<template>
	<div
		class="ms-callout ms-callout-md"
		:class="{
			'ms-callout-show': value
		}"
		:style="{
			'width': width
		}"
	>	
		<div class="ms-callout-triggle"
			:style="{
				'left': left
			}"
		></div>
		<div class="ms-callout-cover"></div>
		<div class="ms-callout-content">
			<slot>
				<p>{{ text }}</p>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'f-callout',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: 'auto'
		},
		left: {
			type: String
		},
		text: {
			type: String
		}
	}
}
</script>

