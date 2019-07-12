<template>
	<div
		class="ms-progress-default ms-progress-indicator-progress"
		:class="[
			`ms-variant-${progressbar.variant}`
		]"
		:style="{
			'width': `${progressbar.precision * 100}%`,
			'line-height': height
		}"
	>
		{{ labelShow ? progressbar.label : '' }}
	</div>
</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-progress-indeterminate',
	mixins: [mixin]
}
</script>