import './panel.scss';

import Panel from './index.vue';

export default function install(Vue) {
	Vue.component(Panel.name, Panel);
}