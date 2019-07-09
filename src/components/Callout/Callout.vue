<template>
	<div
		class="ms-callout"
		:class="[
			`ms-callout-${computedSize}`,
			{
				'ms-callout-show': value
			}
		]"
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
import mixin from '../mixin';

export default {
	name: 'f-callout',
	mixins: [mixin],
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

