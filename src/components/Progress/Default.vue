<template>
	<div style="height: 100%">
		<div
			v-for="(progress, index) in progressbar"
			class="ms-progress-default"
			:class="[
				`ms-variant-${progress.variant}`
			]"
			:style="{
				'width': `${progress.precision * 100}%`,
				'line-height': height
			}"
		>{{ labelShow ? progress.label : '' }}</div>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-progress-default',
	mixins: [mixin]
}
</script>

