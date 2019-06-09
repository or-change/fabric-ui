import './dropdown.scss';

import Dropdown from './index.vue';
import DropdownItem from './Item';

export default function install(Vue) {
	Vue.component(Dropdown.name, Dropdown);
	Vue.component(DropdownItem.name, DropdownItem);
};