import './datepicker.scss';

import Datepicker from './Datepicker.vue';

export default function install(Vue) {
	Vue.component(Datepicker.name, Datepicker);
}