<template>
	<div class="ms-button ms-button-split"
		:class="{
			'ms-split-standard': isStandard,
			'ms-split-primary': !isStandard,
			'ms-button-disabled': disableClick || disableDropdown
		}">
		<button
			:disabled="disableClick"
			class="ms-split-left"
			:class="{
					'ms-button-disabled': disableClick
				}"
			>
			<slot></slot>
		</button>
		<span class="split"></span>
		<button
			:disabled="disableDropdown"
			@click="toggle"
			class="ms-split-right"
			:class="{
				'ms-button-disabled': disableDropdown
			}">
			<i class="ms-Icon ms-Icon--ChevronDown down"></i>
			<f-menu
				ref="menu"
				:menu="menu"></f-menu>
		</button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-split-button',
	mixins: [mixin],
	props: {
		disableClick: {
			type: Boolean,
			default: false
		},
		disableDropdown: {
			type: Boolean,
			default: false
		},
		menu: {
			type: Array,
			default: null
		}
	},
	methods: {
		toggle() {
			const menu = this.$refs.menu;

			if (menu.isShow) {
				menu.hide();
			} else {
				menu.show();
			}
		}
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-button-split {
	padding: 0px;
	height: 32px;
	position: relative;

	.ms-button-disabled {
		border: none;
	}

	ul.ms-menu {
		top: 33px;
	}
	
	button {
		font: inherit;
		font-size: $ms-font-size-14;
		font-weight: $ms-font-weight-semibold;
		cursor: pointer;
		border: none;
		vertical-align: top;
		user-select: none;
		outline: transparent none medium;
		background-color: transparent;
		padding: 0px;
		margin: 0px;
		float: left;
	}

	.ms-split-left {
		padding: 0 16px;
		height: 100%;
	}

	.split {
		height: 20px;
		position: absolute;
		right: 31px;
		top: 6px;
		width: 1px;
		background-color: rgb(222, 236, 249);
	}

	.ms-split-right {
		padding: 6px 6px;
		height: 100%;
		width: 31px;
		.down {
			font-size: 12px;
		}
	}

	&.ms-split-primary {
		.ms-split-left, .ms-split-right {
			background-color: $ms-color-blue;
			color: $ms-color-white;
			&:hover {
				background-color: $ms-color-communicationShade10;
				color: $ms-color-white;
			}
			&:active {
				background-color: $ms-color-communicationShade20;
				color: $ms-color-white;
			}
		}

		.split {
			background-color: rgb(222, 236, 249);
		}

	}

	&.ms-split-standard {
		border-color: $ms-color-gray110;
		
		.ms-split-left, .ms-split-right {
			background-color: $ms-color-white;
			color: $ms-color-gray160;
			&:hover {
				background-color: $ms-color-gray20;
				color: $ms-color-gray190;
			}
			&:active {
				background-color: rgb(200, 200, 200);
				color: $ms-color-gray190;
			}
		}

		.split {
			background-color: rgb(200, 198, 196);
		}
	}

	&.ms-button-disabled {
		&.ms-split-primary, &.ms-split-standard {
			border: none;

			.ms-button-disabled {
				background-color: #f4f4f4;
				color: darken($ms-color-white, 35%);
				cursor: default;
			}
		}
	}
}
</style>


