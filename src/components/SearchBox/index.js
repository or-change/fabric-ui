import './searchBox.scss';

import SearchBox from './SearchBox.vue';

export default function install(Vue) {
	Vue.component(SearchBox.name, SearchBox);
}