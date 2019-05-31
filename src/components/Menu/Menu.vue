<template>
	<ul
		v-show="isShow"
		@mouseover="show"
		class="ms-menu">
		<slot name="menu-header"></slot>
		<slot name="menu-body">
			<component
				v-for="(item, index) in menu"
				:key="index"
				:is="getComponent(item)"
				:options="item">
			</component>
		</slot>
	</ul>
</template>

<script>
import MenuItem from './Item';
import MenuSubItem from './Sub';
import MenuSubSplitItem from './SubSplit';
import MenuDivide from './Divide';

export default {
	name: 'f-menu',
	props: {
		menu: {
			type: Array
		},
		type: {
			type: String,
			default: 'default'
		}
	},
	data() {
		return {
			isShow: false
		};
	},
	methods: {
		getComponent(data) {
			if (!data) {
				return MenuDivide;
			}

			if (!data.subMenu) {
				return MenuItem;
			}

			if (data.split) {
				return MenuSubSplitItem;
			}

			return MenuSubItem;
		},
		show() {
			this.isShow = true;
			this.$emit('shown', this);
		},
		hide() {
			this.isShow = false;
			this.$emit('hidden', this);
		}
	}
}
</script>