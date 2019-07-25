<template>
	<button
		type="button"
		:disabled="disabled"
		class="ms-button-dropdown"
		:class="{
			'ms-button-disabled': disabled,
			'ms-button-not-split': !split
		}"
		@click="emit"
	>

		<span v-show="showSplit" class="ms-button-split-icon"></span>
		<i
			v-show="!triangle"
			:class="`${$fabric.icon.down} ms-dropdown-icon`"></i>
		<span
			v-show="triangle"
			class="ms-dropdown-triangle ms-dropdown-icon"></span>
	</button>
</template>

<script>
export default {
	name: 'f-button-dropdown',
	props: {
		split: {
			type: Boolean
		},
		triangle: {
			type: Boolean
		},
		disabled: {
			type: Boolean
		},
		showSplit: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		emit(event) {
			if (this.split) {
				this.$emit('dropdown', event);
			} else {
				this.$emit('click', event);
			}
		}
	}
}
</script>

<style lang="scss">
@import 'office-ui-fabric-core/src/sass/_References.scss';
button.ms-button-dropdown {
	position: relative;
	font-size: 12px;
	overflow: hidden;
	margin-left: -1px;
}

.ms-dropdown-icon {
	float: left;
}

.ms-button-split-icon {
	position: absolute;
	width: 1px;
	height: 50%;
	top: 25%;
	left: 0px;
	background-color: $ms-color-gray60;
}

.ms-dropdown-triangle {
	width: 0; 
	height: 0;
	border-style: solid;
	border-color:$ms-color-gray60 transparent transparent transparent;
}

.ms-button-primary {
	.ms-button-split-icon {
		background-color: $ms-color-communicationTint30;
	}

	.ms-dropdown-triangle {
		border-color:$ms-color-communicationTint30 transparent transparent transparent;
	}
}

.ms-button-disabled {
	.ms-button-split-icon {
		background-color: rgb(200, 198, 196);
	}

	.ms-dropdown-triangle {
		border-color: rgb(200, 198, 196) transparent transparent transparent;
	}
}

.ms-button-md {
	button.ms-button-not-split {
		padding-left: 0px;
		padding-right: 8px;
	}

	.ms-dropdown-triangle {
		border-width: 5px;
		margin-top: 6px;
	}
}

.ms-button-sm {
	button.ms-button-not-split {
		padding-left: 0px;
		padding-right: 6px;
	}

	.ms-dropdown-triangle {
		border-width: 4px;
		margin-top: 8px;
	}
}

.ms-button-lg {
	button.ms-button-not-split {
		margin-left: -5px;
		padding-left: 0px;
		padding-right: 10px;
	}

	.ms-dropdown-triangle {
		border-width: 6px;
		margin-top: 4px;
	}
}

.ms-button-compound {
	&.ms-button-sm .ms-button-dropdown {
		padding: 22px 8px 21px;
	}

	&.ms-button-md .ms-button-dropdown {
		padding: 24px 11px 25px;
	}

	&.ms-button-lg .ms-button-dropdown {
		padding: 28px 14px 27px;
	}
}
</style>


