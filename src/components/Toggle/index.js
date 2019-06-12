import './toggle.scss';

import Toggle from './index.vue';

export default function install(Vue) {
	Vue.component(Toggle.name, Toggle);
}