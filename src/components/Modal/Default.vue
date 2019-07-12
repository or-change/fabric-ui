<template>
	<div
		class="ms-modal"
		:class="[
			`ms-modal-${size}`
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
				</div>
			</slot>

			<slot name="ms-modal-body">
				<div class="ms-modal-body">
					<f-button 
						:text="closeTitle"
						@click.native="close"
					/>

					<p class="ms-modal-content">{{ text }}</p>
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

export default {
	name: 'f-modal-default',
	mixins: [mixin],
	props: {
		size: {
			type: String,
			default: 'sm'
		}
	}
}
</script>
