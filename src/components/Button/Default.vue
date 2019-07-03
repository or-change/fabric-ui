<template>
	<button
		:type="type" :disabled="disabled"
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
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-default-button',
	mixins: [mixin]
}
</script>
