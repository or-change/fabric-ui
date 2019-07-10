<template>
	<div class="ms-radio-icon">
		<f-radio-base
			:id="id"
			:disabled="disabled"
			:checked="checked"
			:name="name"
			:value="value"
			@change="select"
		>
			<div class="ms-radio-content">
				<img :src="image" />
			</div>
			<span
				class="ms-icon-description"
			>{{ label }}</span>
		</f-radio-base>
	</div>
</template>


<script>
import mixin from './mixin';
import FRadioBase from './Base';

export default {
	name: 'f-radio-image',
	mixins: [mixin],
	components: {
		FRadioBase
	},
	props: {
		image: {
			type: String,
			default: null
		},
		checked: {
			type: Boolean
		}
	}
}
</script>