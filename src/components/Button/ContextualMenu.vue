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
		<i class="ms-Icon ms-Icon--ChevronDown ms-icon-dropdown"
			style="isplay: block;float: right;margin-left:6px"
		></i>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-contextual-menu-button',
	mixins: [mixin]
}
</script>
