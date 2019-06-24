import './group.scss';

import Group from './index.vue';

export default function install(Vue) {
	Vue.component(Group.name, Group);
}