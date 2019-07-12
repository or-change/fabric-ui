import './list.scss';

import List from './List.vue';

export default function install(Vue) {
	Vue.component(List.name, List);
}