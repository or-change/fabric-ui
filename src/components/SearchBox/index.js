import './searchBox.scss';

import SearchBox from './index.vue';

export default function install(Vue) {
	Vue.component(SearchBox.name, SearchBox);
}