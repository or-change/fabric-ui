<template>
	<button
		:type="type" :disabled="disabled"
		:class="[
			`ms-button-${outlook}`,
			'ms-compound-button'
		]"
		@click="emitCustomEvent('click')"
	>
		<span class="ms-button-label">{{ text }}</span>
		<div class="ms-description">{{ description }} </div>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-compound-button',
	mixins: [mixin],
	props: {
		description: {
			type: String,
			default: null
		}
	}
}
</script>
