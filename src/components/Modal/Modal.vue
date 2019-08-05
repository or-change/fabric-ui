<template>
	<component
		:id="id"
		ref="f-modal-container"
		v-if="visible"
		:is="component"
		:width="computedWidth"
		:size="computedSize"
		:position="position"
		:draggable="draggable"
		:overlay="overlay"
		:overlayTheme="overlayTheme"
		:closeOnBackdrop="closeOnBackdrop"
		:title="title"
		:text="text"
		:centered="centered"
		:variant="variant"
		:closeTitle="closeTitle"
		:closeButton="closeButton"
		:okText="okText"
		:cancelText="cancelText"
		:fluid="fluid"
		@mousemove.native="dragging"
		@dragStart="customDragStart"
		@dragEnd="customDragEnd"
		@close="customClose"
		@ok="customOk"
		@cancel="customCancel"
		@backdropClose="customBackdropClose"
	>
		<slot  name="ms-modal-header" slot="ms-modal-header"></slot>
		<slot name="ms-modal-body" slot="ms-modal-body"></slot>
		<slot name="ms-modal-footer" slot="ms-modal-footer"></slot>
	</component>
</template>

<script>
import parameter from './parameter';

import mixin from './mixin';
import globalMixin from '../mixin';

import FModalDefault from './Default';
import FDialog from './Dialog';
import FPanel from './Panel';

export default {
	name: 'f-modal',
	data() {
		return {
			outer: null,
			startPosition: null,
			visible: false
		}
	},
	components: {
		FModalDefault,
		FDialog,
		FPanel
	},
	mixins: [mixin, globalMixin],
	props: {
		id: {
			type: String,
			required: true
		},
		value: {
			type: Boolean,
			default: false
		},
		type: {
			type: String
		},
		stacking: {
			type: Boolean,
			default: true
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
		},
		component() {
			if (!this.type) {
				return 'f-modal-default';
			}

			return this.type === 'dialog' ? 'f-dialog' : 'f-panel';
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
		customBackdropClose() {
			if (this.closeOnBackdrop) {
				this.close();
				this.$emit('backdropClick');
			}
		},
		customDragStart(event) {
			if (!this.draggable) {
				return;
			}

			const { clientX, clientY } = event;
			const modal = this.$refs['f-modal-container'].$refs['f-modal'];
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

			const modal = this.$refs['f-modal-container'].$refs['f-modal'];
			const { x, y } = event;

			modal.style.left = `${x - this.startPosition.offsetX}px`;
			modal.style.top = `${y - this.startPosition.offsetY}px`;
		},
		customDragEnd() {
			this.startPosition = null;
		},
		customClose() {
			this.$emit('input', false);
		},
		customOk() {
			this.$emit('ok');
			this.customClose();
		},
		customCancel() {
			this.$emit('cancel');
			this.customClose();
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
