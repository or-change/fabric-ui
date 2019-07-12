<template>
	<div class="ms-spin-button"
		:class="[
			`ms-spin-button-${computedSize}`,
			{
				'ms-spin-button-enabled': !disabled,
				'ms-spin-button-disabled': disabled,
				'ms-spin-button-active': !disabled && active
			}
		]">
		<slot name="ms-spin-button-start">
			<div v-if="!end" class="ms-spin-button-label ms-spin-button-label-start">
				<i :class="icon"></i>
				<span>{{ label }}</span>
			</div>
		</slot>

		<div class="ms-spin-button-input">
			<input
				type="text"
				:disabled="disabled"
				@input="input"
				@focus="active = true"
				@blur="active = false"
				v-model="text" />
			<span class="ms-spin-button-input-handler">
				<button
					type="button"
					:disabled="disabled"
					@mousedown="isMousedown = true;plus()"
					@click="remove"
					@mouseout="remove"
				>
					<slot name="ms-spin-button-up">
						<i class="ms-Icon ms-Icon--ChevronUpSmall"></i>
					</slot>
				</button>
				<button
					:disabled="disabled"
					type="button"
					@mousedown="isMousedown = true;reduce()"
					@click="remove"
					@mouseout="remove"
				>
					<slot name="ms-spin-button-down">
						<i class="ms-Icon ms-Icon--ChevronDownSmall"></i>
					</slot>
				</button>
			</span>
		</div>

		<slot name="ms-spin-button-end">
			<div v-if="end" class="ms-spin-button-label ms-spin-button-label-end">
				<i :class="icon"></i>
				<span>{{ label }}</span>
			</div>
		</slot>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-spin-button',
	mixins: [mixin],
	data() {
		return {
			text: null,
			active: false,
			timer: null,
			interval: 65,
			precision: 100,
			isMousedown: false
		}
	},
	watch: {
		value(newValue, oldValue) {
			this.text = newValue;
		}
	},
	props: {
		value: {
			type: Number
		},
		step: {
			type: Number,
			default: 1
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number
		},
		label: {
			type: String
		},
		icon: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		end: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		plus() {
			if (this.isMousedown) {
				this.timer = setTimeout(() =>{
					const newValue = Math.round(this.value * this.precision + this.step * this.precision) / this.precision;

					if (!this.max || newValue <= this.max) {
						this.$emit('input', newValue);
						this.$emit('change');
					}

					this.plus();
				}, this.interval);
			}
		},
		reduce() {
			if (this.isMousedown) {
				this.timer = setTimeout(() => {
					const newValue = Math.round(this.value * this.precision - this.step * this.precision) / this.precision;
	
					if (newValue >= this.min) {
						this.$emit('input', newValue);
						this.$emit('change');
					}

					this.reduce();
				}, this.interval);
			}
		},
		remove() {
			this.isMousedown = false;

			clearTimeout(this.timer);
		},
		input(value) {
			if (this.text === '-' || this.text === '+' || this.text === '') {
				return;
			}

			if (Number(this.text) < this.min) {
				this.text = this.min;
			}

			if (Number(this.text) > this.max) {
				this.text = this.max;
			}

			this.$emit('input', Number(this.text));
			this.$emit('change');
		}
	},
	mounted() {
		this.text = this.value ? this.value : this.min;
	}
}
</script>

