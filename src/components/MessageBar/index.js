import './messageBar.scss';

import MessageBar from './index.vue';

export default function install(Vue) {
	Vue.component(MessageBar.name, MessageBar);
}