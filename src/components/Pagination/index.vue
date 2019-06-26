<template>
	<ul
		class="ms-pagination ms-pagination-md"
		:class="{
			'ms-pagination-border': border && !bar,
			'ms-pagination-bar': bar && !border
		}"
	>
		<li
			class="ms-button-prev"
		>
			<button
				@click="setValue(--number)"
			>{{ prevText }}</button>
		</li>

		<li v-for="(item, index) in renderData"
		>
			<button
				:class="{
					'ms-button-active': number === item.number
				}"
				@click="setValue(item.number)"
			>{{ item.text }}</button>
		</li>

		<li
			class="ms-button-next"
		>
			<button
				@click="setValue(++number)"
			>{{ nextText }}</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'f-pagination',
	data() {
		return {
			number: 1
		}
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		value: {
			type: Number,
			default: 1
		},
		limit: {
			type: Number,
			default: 5,
			validator(value) {
				return value >= 5;
			}
		},
		prevText: {
			type: String,
			default: '<'
		},
		nextText: {
			type: String,
			default: '>'
		},
		hideGotoEndButton: {
			type: Boolean,
			default: false
		},
		numberOfPages: {
			type: Number,
			default: 0
		},
		border: {
			type: Boolean,
			default: false
		},
		bar: {
			type: Boolean,
			default: false	
		}
	},
	watch: {
		value() {
			this.setValue(this.value);
		}
	},
	computed: {
		renderData() {
			const result = [{
				number: 1,
				text: 1
			}];

			if (this.numberOfPages === 0) {
				return [];
			}

			if (this.numberOfPages <= this.limit) {
				for (let i = 2; i <= this.numberOfPages; i++) {
					result.push({
						number: i,
						text: i
					});
				}

				return result;
			}

			if (this.number <= this.limit - 2) {
				for (let i = 2; i <= this.limit - 2; i++) {
					result.push({
						number: i,
						text: i
					});
				}

				result.push({
					number: this.limit - 1,
					text: '...' 
				});
			}

			if (this.number >= this.numberOfPages - this.limit + 3) {
				result.push({
					number: this.numberOfPages - this.limit + 2,
					text: '...' 
				});

				for (let i = this.numberOfPages - this.limit + 3; i < this.numberOfPages; i++) {
					result.push({
						number: i,
						text: i 
					});
				}
			}

			if (this.number > this.limit - 2 && this.number < this.numberOfPages - this.limit + 3) {
				result.push({
					number: this.number - Math.floor((this.limit - 5) / 2) - 1,
					text: '...' 
				});

				for (let i = this.number - Math.floor((this.limit - 5) / 2); i <= this.number +  Math.ceil((this.limit - 5) / 2); i++) {
					result.push({
						number: i,
						text: i 
					});
				}

				result.push({
					number: this.number +  Math.ceil((this.limit - 5) / 2) + 1,
					text: '...' 
				});
			}

			result.push({
				number: this.numberOfPages,
				text: this.numberOfPages
			});

			return result;
		}
	},
	methods: {
		setValue(number) {
			this.number = number;

			if (number < 1) {
				this.number = 1;
			}

			if (number > this.numberOfPages) {
				this.number = this.numberOfPages;
			}
			
			this.$emit('change', this.number);

			this.$emit('input', this.number);
		}
	},
	mounted() {
		this.setValue(this.value);
	}
}
</script>
