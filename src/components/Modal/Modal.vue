<template>
	<div class="ms-modal ms-modal-md" :id="id" v-if="visible"
		@mousemove="dragging"
	>
		<div
			ref="f-modal"
			class="ms-modal-main"
			:class="[
				{
					'ms-modal-center': centered
				}
			]"
			:style="{
				'width': width ? width: '80vw'
			}"
			@mousedown.prevent="dragStart"
			@mouseup="dragEnd"
		>
			<slot name="ms-modal-header">
				<div class="ms-modal-header" v-if="!hideHeader"
					:class="[
						`ms-variant-${variant}`
					]"
				>
					<span>{{ title }}</span>
				</div>
			</slot>

			<slot>
				<div class="ms-modal-body">
					<f-button 
						:text="closeTitle"
						@click="close"
					/>

					<p>{{ text }}</p>
				</div>
			</slot>

			<slot name="ms-modal-footer"></slot>
		</div>

		<button v-if="overlay"
			@click="backdropClose"
			class="ms-modal-overlay"
			:class="{
				'ms-modal-overlay-dark': overlayTheme === 'dark',
				'ms-modal-overlay-light': overlayTheme === 'light'
			}"
		></button>
	</div>
</template>

<script>
import mixin from './mixin';
import parameter from './parameter';

export default {
	name: 'f-modal',
	mixins: [mixin],
	data() {
		return {
			outer: null,
			startPosition: null
		}
	},
	props: {
		closeTitle: {
			type: String,
			default: 'Close'
		}
	},
	computed: {
		outerId() {
			return `${this.id}__f_modal_outer`;
		}
	},
	watch: {
		value() {
			this.setVisible();
		}
	},
	methods: {
		setVisible(value = this.value) {
			this.visible = value;

			if (this.visible) {
				this.outer = document.createElement('div');

				this.outer.id = this.outerId;
				this.outer.style.position = 'absolute';
				this.outer.style['z-index'] = parameter.zIndex;

				document.body.appendChild(this.outer);
				this.outer.appendChild(this.$el);

				if (parameter.count === 0 && this.overlay) {
					parameter.isScroll = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
					parameter.overflow = document.body.style.overflow;
					parameter.paddingRight = document.body.style.paddingRight;
					document.body.style.overflow = 'hidden';

					if (parameter.isScroll) {
						document.body.style['padding-right'] = '17px';
					}
				}
 
				parameter.count = ++parameter.count;
				
				this.$root.$emit('f::modal::show', this.id);

				this.$emit('shown');
			} else {
				if (!this.outer) {
					return;
				}

				document.body.removeChild(this.outer);
				parameter.count = --parameter.count;
				
				if (parameter.count === 0 && this.overlay) {
						document.body.style.overflow = parameter.overflow ? parameter.overflow : 'auto';

					if (parameter.isScroll) {
						document.body.style.paddingRight = parameter.paddingRight ? parameter.paddingRight : '0px';
					}

					parameter.bodyStyle= null;
				}

				this.$emit('hidden');
			}
		},
		modalListener(id) {
			if (this.visible && !this.stacking && id !== this.id) {
				this.close();
			}
		},
		backdropClose() {
			if (this.closeOnBackdrop) {
				this.close();
			}
		},
		dragStart(event) {
			if (!this.draggable) {
				return;
			}

			const { clientX, clientY } = event;
			const modal = this.$refs['f-modal'];
			const { left, top } = modal.getBoundingClientRect();

			modal.style.margin = '0px';
			modal.style.position = 'absolute';
			modal.style.top = `${top}px`;
			modal.style.left = `${left}px`;

			this.startPosition = {
				offsetX: clientX - left , offsetY: clientY - top
			};
		},
		dragging(event) {
			if (!this.startPosition || !this.startPosition.offsetX || !this.startPosition.offsetY) {
				return;
			}

			const modal = this.$refs['f-modal'];
			const { x, y } = event;

			modal.style.left = `${x - this.startPosition.offsetX}px`;
			modal.style.top = `${y - this.startPosition.offsetY}px`;
		},
		dragEnd() {
			this.startPosition = null;
		}
	},
	mounted() {
		this.setVisible();

		this.$root.$on('f::modal::show', this.modalListener);
	},
	destroyed() {
		this.$root.$off('f::modal::show', this.modalListener);
	}
}
</script>
