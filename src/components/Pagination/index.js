import './pagination.scss';

import Pagination from './Pagination.vue';

export default function install(Vue) {
	Vue.component(Pagination.name, Pagination);
}