<template>
	<ul
		v-show="isShow"
		@mouseover="show"
		class="ms-menu"
		:class="{
			'ms-menu-left': direction === 'left'
		}"
		>
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
		id: {
			type: String
		},
		menu: {
			type: Array
		},
		type: {
			type: String,
			default: 'default'
		},
		direction: {
			type: String,
			default: 'right'
		},
		auto: {
			type: Boolean,
			default: true
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

			this.$root.$emit('menu-show', this.id)
		},
		hide() {
			this.isShow = false;
			this.$emit('hidden', this.id);
		},
		toggle() {
			if (this.isShow) {
				return this.hide();
			}

			this.show();
		},
		closeOther(id) {
			if (id !== this.id) {
				this.hide();
			}
		}
	},
	mounted() {
		if (this.auto) {
			window.addEventListener('click', this.hide);
			this.$root.$on('menu-show', this.closeOther);
		}

		if (!this.id) {
			console.warn('You have not define the id of menu, and the auto show will be abnormal.');
		}
	},
	destroyed() {
		if (this.auto) {
			window.removeEventListener('click', this.hide);
			this.$root.$off('menu-show', this.closeOther);
		}
	}
}
</script>