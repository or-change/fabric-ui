<template>
	<button
		class="ms-button ms-button-default"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-standard': isStandard && !disabled
		}"
		:disabled="disabled"
		:type="type"
		@click="toggle">
		{{ text }}
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-toggle-button',
	mixins: [mixin],
	data() {
		return {
			text: null
		};
	},
	props: {
		defaultText: {
			type: String,
			default: ''
		},
		toggleText: {
			type: String,
			default: ''
		}
	},
	methods: {
		toggle() {
			if (this.text === this.defaultText) {
				this.text = this.toggleText;

				return;
			}

			this.text = this.defaultText;
		}
	},
	mounted() {
		this.toggle();
	}
}
</script>

