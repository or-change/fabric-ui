import './modal.scss';

import Modal from './Modal.vue';

export default function install(Vue) {
	Vue.component(Modal.name, Modal);
}