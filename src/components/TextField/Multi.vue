<template>
	<div class="ms-text-field-group-multi">
		<slot>
			<textarea
				:rows="rows"
				:class="{
					'ms-text-area-unresize': !resize
				}"
				:readonly="readonly"
				:placeholder="placeholder"
				:disabled="disabled"
				@input="input"
				v-model="text"
			></textarea>
		</slot>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-text-field-multi',
	data() {
		return {
			text: null
		}
	},
	mixins: [mixin],
	watch: {
		value() {
			this.setText();
		}
	},
	methods: {
		input() {
			this.$emit('input', this.text);
		},
		setText() {
			this.text = this.value;
		}
	},
	mounted() {
		this.setText();
	}
}
</script>
