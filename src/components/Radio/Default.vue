<template>
	<div
		class="ms-radio-default"
	>
		<base-radio
			:id="id"
			:disabled="disabled"
			:checked="checked"
			:name="name"
			:value="value"
			@change="select"
		>
			<span>{{ label }}</span>
		</base-radio>
	</div>
</template>

<script>
import BaseRadio from './Base';
import mixin from './mixin';

export default {
	name: 'f-radio-default',
	mixins: [mixin],
	components: {
		BaseRadio
	},
	props: {
		checked: {
			type: Boolean
		}
	}
}
</script>

