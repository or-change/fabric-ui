import './modal.scss';

import Modal from './Modal.vue';
import Dialog from './Dialog.vue';
import Panel from './Panel.vue';

const modalList = [
	Modal, Dialog, Panel
];

export default function install(Vue) {
	modalList.forEach(modal => {
		Vue.component(modal.name, modal);
	});
}