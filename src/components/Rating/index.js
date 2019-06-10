import './rating.scss';

import Rating from './index.vue';

export default function install(Vue) {
	Vue.component(Rating.name, Rating);
}