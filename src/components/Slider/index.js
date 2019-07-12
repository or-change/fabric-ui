import './slider.scss';

import Slider from './Slider.vue';

export default function install(Vue) {
	Vue.component(Slider.name, Slider);
}