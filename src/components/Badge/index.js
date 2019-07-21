import './badge.scss';

import Badge from './Badge.vue';

export default function install(Vue) {
	Vue.component(Badge.name, Badge);
};