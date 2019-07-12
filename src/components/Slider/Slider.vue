<template>
	<div class="ms-slider ms-slider-md"
		:class="{
			'ms-slider-enabled': !disabled,
			'ms-slider-disabled': disabled,
			'ms-slider-horizontal': !vertical,
			'ms-slider-vertical': vertical,
			'ms-slider-active': slider
		}"
		@mousedown="focus"
		@click="click"
	>
		<label v-if="label" class="ms-slider-label">
			{{ label }}
		</label>

		<div class="ms-slider-container">
			<div class="ms-slider-inline">
				<component 
					class="ms-slider-inline-container"
					ref="ms-line"
					:is="type"
					:origin-from-zero="originFromZero"
				/>
			</div>

			<label v-if="showValue" class="ms-slider-label">
				{{ value }}
			</label>
		</div>
	</div>
</template>

<script>
import FSliderVertical from './Vertical';
import FSliderHorizontal from './Horizontal';

export default {
	name: 'f-slider',
	data() {
		return {
			slider: false
		}
	},
	components: {
		FSliderVertical,
		FSliderHorizontal
	},
	props: {
		label: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 10
		},
		value: {
			type: Number,
			default: 0
		},
		step: {
			type: Number,
			default: 1
		},
		originFromZero: {
			type: Boolean,
			default: false
		},
		vertical: {
			type: Boolean,
			default: false
		},
		showValue: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		value() {
			if (this.slider) {
				return;
			}

			this.computedSlider();
		}
	},
	computed: {
		type() {
			return this.vertical ? 'f-slider-vertical' : 'f-slider-horizontal';
		}
	},
	methods: {
		stop(e) {
			if(e.stopPropagation) e.stopPropagation();
    	if(e.preventDefault) e.preventDefault();
		},
		focus(event) {
			
			const handlerInfo = this.$refs['ms-line'].$refs['ms-handler'].getBoundingClientRect();

			this.slider = true;

			this.stop(event);
		},
		click(event) {
			this.focus(event);
			this.move(event);
			this.up(event);
		},
		move(event) {
			if (!this.slider) {
				return;
			}

			if (this.disabled) {
				return;
			}

			this.stop(event);

			const { x, y } = event;
			const inlineEle = this.$refs['ms-line'];

			const handler = inlineEle.$refs['ms-handler'];
			const line = inlineEle.$el.getBoundingClientRect();
			let value;

			if (this.vertical) {
				value = this.min + (line.height + line.top - y) / line.height * (this.max - this.min);

			} else {
				value = this.min + (x - (line.x ? line.x : 0)) / line.width * (this.max - this.min);
			}

			if (value < this.min || value > this.max) {
				return;
			}

			this.computedSlider(value);
		},
		up() {
			this.slider = false;

			this.computedSlider(this.value);
		},
		setZero() {
			const zeroInfo = this.$refs['ms-line'].$refs['ms-zero'];

			if (this.min > 0) {
				zeroInfo.style.display = 'none';
			}

			const difference = (0 - this.min) / (this.max - this.min);

			if (this.vertical) {
				zeroInfo.style.bottom = `${difference * 100}%`;
			} else {
				zeroInfo.style.left = `${difference * 100}%`;
			}
		},
		computedSlider(value = this.value) {
			const inline = this.$refs['ms-line'];

			const inactiveZero = inline.$refs['ms-inactive-zero'];
			const handler = inline.$refs['ms-handler'];
			const active = inline.$refs['ms-active'];
			const inactive = inline.$refs['ms-inactive'];

			let inactiveZeroWidth, activeWidth, inactiveWidth;

			if (value < this.min) {
				value = this.min;
			}

			if (value > this.max) {
				value = this.max;
			}

			if (this.originFromZero) {
				if (value >= 0) {
					inactiveZeroWidth = 0 - this.min > 0 ? (0 - this.min) / (this.max - this.min) : 0;
					activeWidth = value / (this.max - this.min);
					inactiveWidth = (this.max - value) / (this.max - this.min);
				} else {
					inactiveZeroWidth = (value - this.min) / (this.max - this.min);
					activeWidth = (0 - value) / (this.max - this.min);
					inactiveWidth = (this.max - 0) / (this.max - this.min);
				}
			} else {
				activeWidth = (value - this.min) / (this.max - this.min);
				inactiveWidth = (this.max - value) / (this.max - this.min);
			}

			this.setSlider(activeWidth, inactiveWidth, inactiveZeroWidth, value);

			if (value > this.value) {
				this.$emit('input', Math.round(value - this.value) * this.step + this.value);
				this.$emit('change');
			}

			if (value < this.value) {
				this.$emit('input', this.value - Math.round(this.value - value) * this.step); 
				this.$emit('change');
			}
		},
		setSlider(activeWidth, inactiveWidth, inactiveZeroWidth, value = this.value) {
			const inline = this.$refs['ms-line'];

			const inactiveZero = inline.$refs['ms-inactive-zero'];
			const handler = inline.$refs['ms-handler'];
			const active = inline.$refs['ms-active'];
			const inactive = inline.$refs['ms-inactive'];

			if (this.vertical) {
				if (inactiveZeroWidth || inactiveZeroWidth === 0) {
					inactiveZero.style.height = `${inactiveZeroWidth * 100}%`;
				}

				active.style.height = `${activeWidth * 100}%`;
				inactive.style.height = `${inactiveWidth * 100}%`;

				if (!this.originFromZero) {
					handler.style.bottom = `${(activeWidth) * 100}%`
				} else if (value < 0) {
					handler.style.bottom = `${inactiveZeroWidth * 100}%`;
				} else {
					handler.style.bottom = `${(inactiveZeroWidth + activeWidth) * 100}%`
				}

			} else {
				if (inactiveZeroWidth  || inactiveZeroWidth === 0) {
					inactiveZero.style.width = `${inactiveZeroWidth * 100}%`;
				}

				active.style.width = `${activeWidth * 100}%`;
				inactive.style.width = `${inactiveWidth * 100}%`;

				if (!this.originFromZero) {
					handler.style.left = `${(activeWidth) * 100}%`
				} else if (value <= 0 && this.originFromZero) {
					handler.style.left = `${inactiveZeroWidth * 100}%`;
				} else {
					handler.style.left = `${(inactiveZeroWidth + activeWidth) * 100}%`
				}
			}
		}
	},
	mounted() {
		window.addEventListener('mousemove', this.move);
		window.addEventListener('mouseup', this.up);

		if (this.originFromZero) {
			this.setZero();
		}

		this.computedSlider();
	},
	destroyed() {
		window.removeEventListener('mousemove', this.move);
		window.removeEventListener('mouseup', this.up);
	}
}
</script>
