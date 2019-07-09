import './contextualMenu.scss';

import ContextualMenu from './ContextualMenu.vue';

export default function install(Vue) {
	Vue.component(ContextualMenu.name, ContextualMenu);
}