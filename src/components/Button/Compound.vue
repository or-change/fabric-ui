<template>
	<button :type="type" class="ms-button ms-button-compound"
		:class="{
			'ms-button-disable': disabled,
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
		font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
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
			color: rgb(96, 94, 92);
		}
	}
}
</style>


