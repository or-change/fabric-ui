<template>
	<ul class="ms-menu">
		<li
			v-for="(item, index) in menu"
			:key="index"
			:class="{
				'ms-menu-divider': !item
			}">

			<component v-if="item" :is="getComponent(item)"
				:href="item.href"
				:icon="item.icon"
				:text="item.text"
				:sub-menu="item.subMenu"
				:disabled="item.disabled">
			</component>
		</li>
	</ul>
</template>

<script>
import MenuItem from './Item';
import MenuSub from './Sub';
import MenuSubSplit from './SubSplit';

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
	methods: {
		getComponent(data) {
			if (!data.subMenu) {
				return 'f-menu-item';
			}

			if (data.split) {
				return 'f-menu-sub-split';
			}

			return 'f-menu-sub';
		}
	},
	install(Vue) {
		Vue.component(this.name, this);
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-menu-divider {
	display: block;
	height: $ms-focus-border-width;
	background-color: $ms-color-gray30;
	position: relative;
}
</style>
