<template>
	<div class="ms-split-button">
		<slot name="split-left">
			<button
				:type="type" :disabled="disabled"
				:class="[
					'ms-split-left',
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
		</slot>
		<button
			:disabled="dropdownDisabled"
			:class="[
				'ms-split-right',
				`ms-button-${dropdownDisabled ? 'disabled' : variant}`
			]"
			@click="emitCustomEvent('dropdown')"
		>
			<span class="split" v-if="disabled === dropdownDisabled"></span>
			<i class="ms-Icon ms-Icon--ChevronDown ms-icon-dropdown"></i>
		</button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-split-button',
	mixins: [mixin],
	props: {
		dropdownDisabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
