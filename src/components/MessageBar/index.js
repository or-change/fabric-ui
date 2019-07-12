import './messageBar.scss';

import MessageBar from './MessageBar.vue';

export default function install(Vue) {
	Vue.component(MessageBar.name, MessageBar);
}