import './spinButton.scss';

import SpinButton from './index.vue';

export default function install(Vue) {
	Vue.component(SpinButton.name, SpinButton);
}