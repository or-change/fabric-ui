<template>
	<div
		class="ms-message-bar ms-message-bar-md"
		:class="[
			`ms-message-bar-${variant}`,
			{
				'ms-message-bar-single': !isMulti,
				'ms-message-bar-multi': isMulti,
				'ms-message-bar-toggle': multiLine && toggle,
				'ms-message-bar-action': actionButton && (isMulti || !toggle),
				'ms-message-bar-close': closeButton
			}
		]"
	>
		<div class="ms-message-bar-content">
			<slot name="messageBar-icon">
				<div class="ms-message-bar-icon">
					<i :class="icon"></i>
				</div>
			</slot>

			<slot name="messageBar-text">
				<div class="ms-message-bar-text">
					{{ text }}
				</div>
			</slot>

			<div class="ms-message-bar-multi-button">
				<button @click="isMulti = !isMulti;$emit('toggle', isMulti)">
					<i v-if="!isMulti" class="ms-Icon ms-Icon--DoubleChevronDown"></i>
					<i v-if="isMulti" class="ms-Icon ms-Icon--DoubleChevronUp"></i>
				</button>
			</div>

			<div class="ms-message-bar-close-button">
				<button @click="$emit('close')">
					<i class="ms-Icon ms-Icon--Clear"></i>
				</button>
			</div>
			
		</div>

		<div class="ms-message-bar-action-button">
			<button @click="$emit('ok')">
				{{ okTitle }}
			</button>
			<button class="cancel-button" @click="$emit('cancel')">
				{{ cancelTitle }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'f-message-bar',
	data() {
		return {
			isMulti: null
		}
	},
	props: {
		multiLine: {
			type: Boolean,
			default: false
		},
		toggle: {
			type: Boolean,
			default: false
		},
		variant: {
			type: String
		},
		icon: {
			type: String,
			default: 'ms-Icon ms-Icon--Info'
		},
		text: {
			type: String
		},
		actionButton: {
			type: Boolean,
			default: false
		},
		closeButton: {
			type: Boolean,
			default: false
		},
		okTitle: {
			type: String,
			default: 'Yes'
		},
		cancelTitle: {
			type: String,
			default: 'No'
		}
	},
	mounted() {
		this.isMulti = this.toggle ? false : this.multiLine;
	}
}
</script>
