import './dropdown.scss';

import Dropdown from './index.vue';
import DropdownItem from './Item';

import ToggleDirective from './directive';

export default function install(Vue) {
	Vue.component(Dropdown.name, Dropdown);
	Vue.component(DropdownItem.name, DropdownItem);

	Vue.directive('FDropdown', ToggleDirective);
};