import './textField.scss';

import TextField from './TextField.vue';

export default function install(Vue) {
	Vue.component(TextField.name, TextField);
}