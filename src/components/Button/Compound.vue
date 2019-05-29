<template>
	<button :type="type" class="ms-button ms-button-compound"
		:disabled="disabled"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-standard': isStandard && !disabled,
			'ms-button-primary': !isStandard && !disabled
			}">
		<slot>
			<div class="label">{{ label }}</div>
			<div class="description">{{ description }}</div>
		</slot>
	</button>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-compound-button',
	mixins: [mixin],
	props: {
		label: {
			type: String,
			default: 'label'
		},
		description: {
			type: String,
			default: 'description'
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-compound {
	padding: 16px 12px;
	max-width: 280px;
	min-height: 72px;
	height: auto;
	text-align: left;
  line-height: 100%;

	.label {
		margin-bottom: 5px;
	}

	.description {
		font-family: $ms-font-family-west-european;
    font-size: $ms-font-size-12;
    font-weight: $ms-font-weight-regular;
	}

	&.ms-button-primary {
		.description {
			color: $ms-color-white;
		}
	}

	&.ms-button-standard {
		.description {
			color: $ms-color-gray130;
		}
	}

	&.ms-button-disabled  {
		background-color: darken($ms-color-white, 4.5%);
	}
}
</style>


