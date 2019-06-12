import './slider.scss';

import Slider from './index.vue';

export default function install(Vue) {
	Vue.component(Slider.name, Slider);
}