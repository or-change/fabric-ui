<template>
	<div
		class="ms-rating"
		:class="[
			`ms-rating-${computedSize}`,
			{
				'ms-rating-enabled': !disabled && !readonly,
				'ms-rating-disabled': disabled,
				'ms-rating-readonly': readonly
			}
		]">
			<button
				type="button"
				:disabled="disabled"
				v-for="(item, index) in quantity"
				:key="index"
				@mouseover="hover = index"
				@mouseout="hover = null"
				@click="change(index)">
				<div class="ms-rating-container">
					<i :class="[
						'ms-rating-back', icon ? icon : $fabric.icon.star,
						{ 'ms-rating-hover': index < hover }
					]"></i>
					<i :class="`ms-rating-front ${activeIcon ? activeIcon : $fabric.icon.starFilled}`"
						:style="{
							'width':  computedValue >= index + 1 ? '100%' : (
								computedValue <= index ? '0' : `${(computedValue - index) * 100}%`
							)
						}"
					></i>
				</div>
			</button>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-rating',
	mixins: [mixin],
	data() {
		return {
			hover: null
		}
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String
		},
		activeIcon: {
			type: String
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number
		},
		step: {
			type: Number,
			default: 1
		},
		value: {
			type: Number
		},
		unit: {
			type: Number,
			default: 1
		}
	},
	methods: {
		change(index) {
			if (this.readonly) {
				return;
			}

			const computedValue = (index + 1) * this.unit;

			if (this.step === this.unit) {
				this.$emit('input', computedValue);

				return;
			}

			if (this.value > computedValue) {
				if (this.value - this.step >= this.min) {
					this.$emit('input', this.value - this.step);
				} else if (this.value >= this.min) {
					this.$emit('input', this.min);
				}

			} else if (this.value < computedValue) {
				if (this.value + this.step <= this.max) {
					this.$emit('input', this.value + this.step);
				} else if (this.value <= this.max) {
					this.$emit('input', this.max);
				}
			}
		}
	},
	computed: {
		quantity() {
			return Math.ceil(this.max / this.unit);
		},
		computedValue() {
			return this.value / this.unit;
		}
	},
	mounted() {
		if (this.value > this.max) {
			this.$emit('input', this.max);
		} else if (this.value < this.min) {
			this.$emit('input', this.min);
		}
	}
}
</script>

