import './calendar.scss';

import Calendar from './Calendar.vue';

export default function install(Vue) {
	Vue.component(Calendar.name, Calendar);
}