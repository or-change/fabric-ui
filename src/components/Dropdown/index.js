import './dropdown.scss';

import Dropdown from './index.vue';

export default function install(Vue) {
	Vue.component(Dropdown.name, Dropdown);
};