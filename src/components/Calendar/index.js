import './calendar.scss';

import Calendar from './index.vue';

export default function install(Vue) {
	Vue.component(Calendar.name, Calendar);
}