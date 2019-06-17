import './datepicker.scss';

import Datepicker from './index.vue';

export default function install(Vue) {
	Vue.component(Datepicker.name, Datepicker);
}