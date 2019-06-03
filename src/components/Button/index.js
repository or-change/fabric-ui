import './button.scss';

import Button from './Button';

export default function install(Vue) {
	Vue.component(Button.name, Button)
};