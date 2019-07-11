import './rating.scss';

import Rating from './Rating.vue';

export default function install(Vue) {
	Vue.component(Rating.name, Rating);
}