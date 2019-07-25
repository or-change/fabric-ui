import './container.scss';

import Container from './Container.vue';

export default function install(Vue) {
	Vue.component(Container.name, Container);
};