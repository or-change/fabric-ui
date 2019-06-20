import './dialog.scss';

import Dialog from './index.vue';

export default function install(Vue) {
	Vue.component(Dialog.name, Dialog);
}