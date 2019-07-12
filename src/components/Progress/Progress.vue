<template>
	<div class="ms-progress"
		:class="[`ms-progress-${computedSize}`]"
	>
		<div class="ms-progress-title" v-show="title">
			{{ title }}
		</div>

		<div class="ms-progress-bar"
			ref="ms-progress-bar"
			:style="{
				'height': height
			}"
		>	
			<component
				ref="ms-progress-indeterminate"
				:is="type"
				:progressbar="progressbar"
				:height="height"
				:label-show="labelShow"
			/>
		</div>

		<div class="ms-progress-description" v-show="description">
			{{ description }}
		</div>
	</div>
</template>

<script>
import FProgressDefault from './Default';
import FProgressIndeterminate from './Indeterminate';

import mixin from '../mixin';

export default {
	name: 'f-progress',
	data() {
		return {
			labelShow: true,
			timer: null
		}
	},
	mixins: [mixin],
	components: {
		FProgressDefault,
		FProgressIndeterminate
	},
	props: {
		data: {
			type: [Object, Array],
			default: () => {
				return {
					value: 0,
					variant: 'primary'
				};
			}
		},
		title: {
			type: String
		},
		description: {
			type: String
		},
		max: {
			type: Number,
			default: 100
		},
		indeterminate: {
			type: Boolean,
			default: false
		},
		height: {
			type: String,
			default: '2px'
		},
		bar: {
			type: Boolean,
			default: false
		},
		precision: {
			type: Number,
			default: 0
		}
	},
	computed: {
		type() {
			return this.indeterminate ? 'f-progress-indeterminate' : 'f-progress-default';
		},
		progressbar() {
			let result;

			if (this.indeterminate) {
				return this.filterRenderData(this.data);
			}

			if (Array.isArray(this.data)) {
				result = this.data;
			} else {
				result = [this.data];
			}

			const render = result.map(progress => {
				return this.filterRenderData(progress)
			});

			return render;
		}
	},
	watch: {
		height() {
			this.showValue();
		}
	},
	methods: {
		showValue() {
			this.labelShow = this.$refs['ms-progress-bar'].getBoundingClientRect().height > 14;
		},
		animate() {
			if (!this.indeterminate) {
				return;
			}

			const progress = this.$refs['ms-progress-indeterminate'].$el;

			const {width, left} = progress.getBoundingClientRect();
			const bar = this.$refs['ms-progress-bar'].getBoundingClientRect();

			setTimeout(() => {
				if (left < bar.width) {
					progress.style.left = `${left + bar.width * 0.02}px`;
				} else {
					progress.style.left = `-${width}px`;
				}

				this.animate();
			}, 20 + (300 / bar.width) * 50);
		},
		filterRenderData(progress) {
			const { value, label, variant } = progress;
			const precision = value / this.max;

			const renderInfo = {
				value: value ? value : 0,
				variant: variant ? variant : 'primary',
				precision
			};

			if (label) {
				renderInfo.label = label;

				return renderInfo;
			}

			if (!this.precision) {
				renderInfo.label = value;

				return renderInfo;
			}

			renderInfo.label = Math.round(precision * Math.pow(10, this.precision)) / Math.pow(10, this.precision);;

			return renderInfo;
		}
	},
	mounted() {
		this.showValue();

		this.animate();
	},
	destroyed() {
		clearTimeout(this.timer);
	}
}
</script>
