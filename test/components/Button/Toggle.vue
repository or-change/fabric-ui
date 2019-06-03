<template>
	<div>
		<h2>Toggle Button</h2>

		<f-button
			@click="toggleText"
			:text="text"
		/>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin],
	data() {
		return {
			text: 'Volume Muted'
		}
	},
	methods: {
		toggleText() {
			if (this.text === 'Volume Muted') {
				this.text = 'Volume Unmuted';
			} else {
				this.text = 'Volume Muted';
			}
		}
	}
}
</script>
