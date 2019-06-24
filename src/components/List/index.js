import './list.scss';

import List from './index.vue';

export default function install(Vue) {
	Vue.component(List.name, List);
}