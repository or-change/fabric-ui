import './link.scss';

import Link from './index.vue';

export default function install(Vue) {
	Vue.component(Link.name, Link);
}