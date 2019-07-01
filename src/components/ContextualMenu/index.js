import './contextualMenu.scss';

import ContextualMenu from './index.vue';

export default function install(Vue) {
	Vue.component(ContextualMenu.name, ContextualMenu);
}