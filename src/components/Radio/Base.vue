<template>
	<label :for="id"
		:class="{
			'ms-radio-checked': checked,
			'ms-radio-unchecked': !checked
		}"
	>
		<input
			type="radio"
			:id="id"
			:disabled="disabled"
			:checked="checked"
			:name="name"
			:value="value"
			@change="select"
		/>
		<slot></slot>
	</label>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-radio-base',
	mixins: [mixin],
	props: {
		checked: {
			type: Boolean
		}
	}
}
</script>

