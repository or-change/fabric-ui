<template>
	<div class="ms-spin-button ms-spin-button-md"
		:class="{
			'ms-spin-button-enabled': !disabled,
			'ms-spin-button-disabled': disabled,
			'ms-spin-button-active': !disabled && active
		}">
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
					@mousedown="plus"
					@click="remove"
					@mouseout="remove"
				>
					<i class="ms-Icon ms-Icon--ChevronUpSmall"></i>
				</button>
				<button
					:disabled="disabled"
					type="button"
					@mousedown="reduce"
					@click="remove"
					@mouseout="remove"
				>
					<i class="ms-Icon ms-Icon--ChevronDownSmall"></i>
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
import { setInterval, clearInterval } from 'timers';
export default {
	name: 'f-spin-button',
	data() {
		return {
			text: null,
			active: false,
			timer: null,
			interval: 65
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
			this.timer = setInterval(() =>{
				const newValue = this.value + this.step;

				if (!this.max || newValue <= this.max) {
					this.$emit('input', newValue);
				}
			}, this.interval);
		},
		reduce() {
			this.timer = setInterval(() => {
				const newValue = this.value - this.step;

				if (newValue >= this.min) {
					this.$emit('input', this.value - this.step);
				}
			}, this.interval);
		},
		remove() {
			clearInterval(this.timer);
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
		}
	},
	mounted() {
		this.text = this.value ? this.value : this.min;
	}
}
</script>

