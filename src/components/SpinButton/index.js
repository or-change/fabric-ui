import './spinButton.scss';

import SpinButton from './SpinButton.vue';

export default function install(Vue) {
	Vue.component(SpinButton.name, SpinButton);
}