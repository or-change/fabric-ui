import './pagination.scss';

import Pagination from './index.vue';

export default function install(Vue) {
	Vue.component(Pagination.name, Pagination);
}