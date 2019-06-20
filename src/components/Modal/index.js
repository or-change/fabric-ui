import './modal.scss';

import Modal from './index.vue';

export default function install(Vue) {
	Vue.component(Modal.name, Modal);
}