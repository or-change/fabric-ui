<template>
	<f-modal
		class="ms-dialog ms-dialog-md"
		:id="id"
		:width="width ? width : 'auto'"
		:draggable="draggable"
		:overlay="overlay"
		:overlay-theme="overlayTheme ? overlayTheme : 'light'"
		:close-on-backdrop="closeOnBackdrop"
		:centered="centered"
		:stacking="stacking"
		v-model="visible"
		@shown="$emit('shown')"
		@hidden="$emit('hidden');$emit('input', false)"
	>
		<slot name="ms-dialog-header">
			<div slot="ms-modal-header" class="ms-dialog-header"
				:class="[
					`ms-variant-${variant}`
				]"
			>
				<p>{{ title }}</p>
				<div class="button-close" v-if="closeButton && title">
					<f-button icon="ms-Icon ms-Icon--Cancel" :border="false"
						@click="close"
					 />
				</div>
			</div>
		</slot>

		<slot name="ms-dialog-body">
			<div class="ms-dialog-body">
				<p class="ms-dialog-content">{{ text }}</p>
				<div class="ms-dialog-action">
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
	</f-modal>
</template>

<script>
import mixin from './mixin';
import FModal from './Modal';

export default {
	name: 'f-dialog',
	mixins: [mixin],
	components: { FModal },
	props: {
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
	watch: {
		value() {
			this.setVisible();
		}
	},
	methods: {
		setVisible(value= this.value) {
			this.visible = value;
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
	}
}
</script>

<style lang="scss">
.ms-dialog {
	.ms-dialog-header {
		position: relative;
		width: 100%;
		
		p {
			font-size: 20px;
			font-weight: 600;
			color: #fff;
			margin: 0px;
			line-height: normal;
		}

		.button-close {
			position: absolute;
			top: 0px;
			right: 0px;
			button i {
				color: #fff;
			}
		}

		&.ms-variant-default {
			p {
				color: rgb(50, 49, 48);
			}

		.button-close {
			button i {
				color: rgb(96, 94, 92);
			}
		}
		}
	}

	.ms-dialog-body {
		.ms-dialog-content {
			font-size: 12px;
			font-weight: 400;
			color: rgb(50, 49, 48);
			line-height: 1.5;
			overflow-wrap: break-word;
		}

		.ms-dialog-action {
			position: relative;
			width: 100%;
			text-align: right;

			.ms-button button {
				vertical-align: middle;
			}
		}
	}

	&.ms-dialog-md {
		.ms-modal-main {
			max-width: 340px;
     	min-width: 288px;
		}

		.ms-dialog-header {
			p {
				padding-top: 16px;
				padding-right: 46px;
				padding-bottom: 24px;
				padding-left: 24px;
			}

			.button-close {
				padding-top: 14px;
				padding-right: 14px;
				padding-bottom: 0px;
				padding-left: 0px;
			}
		}

		.ms-dialog-body {
			padding-top: 0px;
			padding-right: 24px;
			padding-bottom: 24px;
			padding-left: 24px;

			.ms-dialog-content {
				margin-top: 0px;
				margin-right: 0px;
				margin-bottom: 20px;
				margin-left: 0px;
				padding-top: 8px;
			}

			.ms-dialog-action {
				min-height: 24px;
				line-height: 24px;
				margin-top: 16px;
				margin-right: -4px;
				margin-bottom: 0px;
				margin-left: 0px;

				.ms-button .ms-button-label {
					height: 30px;
					line-height: 30px;
				}

				.ms-button button {
					height: 32px;
					min-width: 80px;
					padding: 0px 16px;
					margin-top: 0px;
					margin-right: 4px;
					margin-bottom: 0px;
					margin-left: 0px;
				}
			}
		}
	}
}
</style>

