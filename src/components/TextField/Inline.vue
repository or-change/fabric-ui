<template>
	<div
		class="ms-text-field-group-inline"
		:style="{'width': width}"
	>
		<div class="ms-text-field-fix" v-show="prefix && !underline">
			<span>{{ prefix }}</span>
		</div>
		<div class="ms-text-field-input">
			<slot>
				<input type="text"
					:readonly="readonly"
					:disabled="disabled"
					:placeholder="placeholder"
					@input="input"
					v-model="text"
					@focus="focus"
					@blur="blur"
				/>
			</slot>
		</div>
		<div class="ms-text-field-icon" v-show="icon">
			<i :class="icon"></i>
		</div>
		<div class="ms-text-field-fix" v-show="suffix && !underline">
			<span>{{ suffix }}</span>
		</div>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-text-field-inline',
	mixins: [mixin],
	data() {
		return {
			text: null
		}
	},
	computed: {
		width() {
			return (!this.prefix && !this.suffix && this.limit) ? `${this.limit + 1}em` : '100%';
		}
	},
	watch: {
		value() {
			this.setText();
		}
	},
	methods: {
		input() {
			let result = this.text;

			if (this.prefix) {
				result = `${this.prefix}${result}`;
			}

			if (this.suffix) {
				result = `${result}${this.suffix}`;
			}

			this.$emit('input', result);
		},
		setText() {
			if (!this.value) {
				return;
			}

			let regExp;

			if (this.prefix && !this.suffix) {
				regExp = new RegExp(`^(${this.prefix})(.*)`);

				return this.text = this.value.match(regExp) ? this.value.match(regExp)[2] : null;
			}

			if (!this.prefix && this.suffix) {
				regExp = new RegExp(`^(.*)(${this.suffix})$`);

				return this.text = this.value.match(regExp) ? this.value.match(regExp)[1] : null;
			}

			
			if (this.prefix && this.suffix) {
				regExp = new RegExp(`^(${this.prefix})(.*)(${this.suffix})$`);
				
				return this.text = this.value.match(regExp) ? this.value.match(regExp)[2] : null;
			}

			this.text = this.value;
		}
	},
	mounted() {
		this.setText();
	}
}
</script>
