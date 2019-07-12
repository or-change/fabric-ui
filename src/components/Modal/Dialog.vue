<template>
	<div
		class="ms-dialog"
		:class="[
			`ms-dialog-${size}`
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
				'width': width
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
					<p>{{ title }}</p>
					<div class="button-close" v-if="closeButton">
						<f-button icon="ms-Icon ms-Icon--Cancel" :border="false"
							@click.native="close"
						/>
					</div>
				</div>
			</slot>

			<slot name="ms-modal-body">
				<div class="ms-modal-body">
					<p class="ms-modal-content">{{ text }}</p>
				</div>
			</slot>

			<slot name="ms-modal-footer">
				<div class="ms-modal-footer">
					<div class="ms-modal-action">
						<f-button 
							theme="primary"
							:text="okText"
							@click.native="ok" />
						<f-button
							:text="cancelText"
							@click.native="cancel" />
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
import mixin from './mixin';

export default {
	name: 'f-dialog',
	mixins: [mixin],
	props: {
		size: {
			type: String,
			default: 'sm'
		}
	}
}
</script>