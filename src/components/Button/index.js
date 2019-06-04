import './button.scss';

import Button from './index.vue';

export default function install(Vue) {
	Vue.component(Button.name, Button);
};