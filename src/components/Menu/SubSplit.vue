<template>
	<li
		@mouseleave="hide">
		<div 
			class="ms-menu-sub"
			@mouseover="select"
			@mouseout="unSelect"
			@mousedown="active"
			@mouseup="unActive"
			:class="{
				'ms-menu-item-disabled': disabled,
				'select': isSelect,
				'active': isActive
			}">
			<a
				:href="link" :target="target">

				<i v-if="icon !== null" :class="icon"></i>
				<span class="text">{{ text }}</span>
			</a>

			<span
				@mouseover="show"
				class="split-wrapper"
				:class="{
					'split-selected': isShow
				}">
				<i class="ms-Icon ms-Icon--ChevronRight ms-ChevronRight"></i>
				<span class="menu-split"></span>
			</span>
		</div>
		<f-menu
			ref="splitSubMenu"
			:menu="subMenu"></f-menu>
	</li>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-menu-sub-split-item',
	mixins: [mixin],
	data() {
		return {
			isShow:false
		}
	},
	methods: {
		show() {
			if (this.disabled) {
				return;
			}

			this.isShow = true;
			this.$refs.splitSubMenu.show();
		},
		hide() {
			this.isShow = false;
			this.$refs.splitSubMenu.hide();
		}
	}
}
</script>

<style lang="scss">
@import 'office-ui-fabric-core/src/sass/_References.scss';

.ms-menu-sub {
	a {
		padding-left: 4px;
	}

	.split-wrapper {
		display: block;
		float: right;
		position: relative;

		.menu-split{
			border-left: 1px solid $ms-color-gray60;
		}

		&.split-selected {
			color: $ms-color-black;
    	background-color: $ms-color-gray30;
		}
	}
}

</style>


