import './button.scss';

import Button from './Button.vue';

export default function install(Vue) {
	Vue.component(Button.name, Button);
};