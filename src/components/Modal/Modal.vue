<template>
	<div :id="id" v-if="visible"
		@mousemove="dragging"
		:class="[
			`ms-panel-${size}`,
			`ms-panel-${position}`,
			{
				'ms-modal': !type,
				'ms-modal-md': !type,
				'ms-dialog': type === 'dialog',
				'ms-dialog-md': type === 'dialog',
				'ms-panel': type === 'panel'
			}
		]"
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
				'width': computedWidth
			}"
			@mousedown.prevent="dragStart"
			@mouseup="dragEnd"
		>
			<slot name="ms-modal-header">
				<div class="ms-modal-header"
					:class="[
						`ms-variant-${variant}`
					]"
				>
					<p v-if="type !== 'panel'">{{ title }}</p>
					<div class="button-close" v-if="closeButton && type">
						<f-button icon="ms-Icon ms-Icon--Cancel" :border="false"
							@click="close"
						/>
					</div>
				</div>

				<div
					class="ms-panel-title"
					v-if="type === 'panel'">
					<p>
						{{ title }}
					</p>
				</div>
			</slot>

			<slot name="ms-modal-body">
				<div class="ms-modal-body">
					<f-button 
						:text="closeTitle"
						@click="close"
						v-if="!type"
					/>

					<p class="ms-modal-content">{{ text }}</p>
				</div>
			</slot>

			<slot name="ms-modal-footer">
				<div class="ms-modal-footer" v-if="type">
					<div class="ms-modal-action">
						<f-button 
							theme="primary"
							:text="okText"
							@click="ok" />
						<f-button
							:text="cancelText"
							@click="cancel" />
					</div>
				</div>
			</slot>
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
import parameter from './parameter';

export default {
	name: 'f-modal',
	data() {
		return {
			outer: null,
			startPosition: null,
			visible: false
		}
	},
	props: {
		id: {
			type: String,
			required: true
		},
		value: {
			type: Boolean,
			default: false
		},
		width: {
			type: String
		},
		size: {
			type: String,
			default: 'sm'
		},
		position: {
			type: String,
			default: 'right'
		},
		scrollable: {
			type: Boolean,
			default: false
		},
		type: {
			type: String
		},
		draggable: {
			type: Boolean,
			default: false
		},
		overlay: {
			type: Boolean,
			default: true
		},
		overlayTheme: {
			type: String,
			default: 'dark'
		},
		closeOnBackdrop: {
			type: Boolean,
			default: true
		},
		title: {
			type: String
		},
		text: {
			type: String
		},
		centered: {
			type: Boolean,
			default: true
		},
		variant: {
			type: String,
			default: 'default'
		},
		stacking: {
			type: Boolean,
			default: true
		},
		closeTitle: {
			type: String,
			default: 'Close'
		},
		closeButton: {
			type: Boolean,
			default: true
		},
		okText: {
			type: String,
			default: 'Save'
		},
		cancelText: {
			type: String,
			default: 'Cancel'
		}
	},
	computed: {
		outerId() {
			return `${this.id}__f_modal_outer`;
		},
		computedWidth() {
			if (this.width) {
				return this.width;
			}

			if (!this.type) {
				return '80vw';
			}
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

				if (this.overlay) {
					parameter.isScroll = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
					parameter.overflow = document.body.style.overflow;
					parameter.paddingRight = document.body.style.paddingRight;
					document.body.style.overflow = 'hidden';

					if (parameter.isScroll) {
						document.body.style['padding-right'] = '17px';
					}
				}
 
				this.$root.$emit('f::modal::show', this.id);

				this.$emit('shown');
			} else {
				if (!this.outer) {
					return;
				}

				document.body.removeChild(this.outer);

				if (this.overlay) {
						document.body.style.overflow = parameter.overflow ? parameter.overflow : 'auto';

					if (parameter.isScroll) {
						document.body.style.paddingRight = parameter.paddingRight ? parameter.paddingRight : '0px';
					}

					parameter.overflow = 'auto';
					parameter.paddingRight = '0px';
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
				this.$emit('backdropClick');
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
		},
		close() {
			this.$emit('input', false);
		},
		ok() {
			this.$emit('ok');
			this.close();
		},
		cancel() {
			this.$emit('cancel');
			this.close();
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
