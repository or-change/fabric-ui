import './checkbox.scss';

import Checkbox from './Checkbox.vue';

export default function install(Vue) {
	Vue.component(Checkbox.name, Checkbox);
};