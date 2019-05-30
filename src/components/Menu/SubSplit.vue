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

				<i v-if="icon !== null" :class="`ms-Icon ms-Icon--${icon}`"></i>
				<span class="text">{{ text }}</span>
			</a>

			<span
				@mouseover="show"
				class="split-wrapper"
				:class="{
					'split-selected': isShow
				}">
				<i class="ms-Icon ms-Icon--ChevronRight ms-ChevronRight"></i>
				<span class="split"></span>
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
	name: 'f-menu-sub-split',
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
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-menu-sub {
	a {
		padding-left: 4px;
	}

	.split-wrapper {
		width: 28px;
		display: block;
		float: right;

		.split{
			border-left: 1px solid $ms-color-gray60;
		}

		&.split-selected {
			color: rgb(0, 0, 0);
    	background-color: rgb(237, 235, 233);
		}
	}
}

</style>


