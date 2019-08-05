<template>
	<div
		class="ms-panel"
		:class="[
			`ms-panel-${position}`,
			{
				'ms-panel-fluid': fluid
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
				'width': width
			}"
			@mousedown="dragStart"
			@mouseup="dragEnd"
		>
			<slot name="ms-modal-header">
				<div class="ms-modal-header"
					:class="[
						`ms-variant-${variant}`
					]"
				>
					<div class="button-close" v-if="closeButton">
						<f-button :icon="$fabric.icon.cancel" :border="false"
							@click="close"
						/>
					</div>
				</div>

				<div
					class="ms-panel-title">
					<p>
						{{ title }}
					</p>
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
import mixin from './mixin';

export default {
	name: 'f-panel',
	mixins: [mixin],
	props: {
		size: {
			type: String,
			default: 'sm'
		}
	}
}
</script>