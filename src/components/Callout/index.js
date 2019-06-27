import './callout.scss';

import Callout from './index.vue';

export default function install(Vue) {
	Vue.component(Callout.name, Callout);
}