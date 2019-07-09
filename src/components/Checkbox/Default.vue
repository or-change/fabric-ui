<template>
	<label :for="id">
		<input 
			type="checkbox"
			:name="name"
			:value="value"
			:id="id"
			:disabled="disabled"
			:checked="checked"
			@change="change"
		/>
		<div
			class="ms-virtual-checkbox"
			:class="{
				'box-right': right
			}">
			<i class="ms-Icon ms-Icon--CheckMark"></i>
		</div>
		<span>{{ label }}</span>
	</label>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-checkbox-default',
	mixins: [mixin],
	props:	{
		checked: {
			type: Boolean
		}
	},
	methods: {
		change(event) {
			this.$emit('change', event.target.checked);
		}
	}
}
</script>

