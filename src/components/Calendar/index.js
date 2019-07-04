import './picker.scss';

import Calendar from './Calendar.vue';
import DatePicker from './DatePicker.vue';
import MonthPicker from './MonthPicker.vue';

const pickerList = [
	Calendar, DatePicker, MonthPicker
];

export default function install(Vue) {
	pickerList.forEach(picker => {
		Vue.component(picker.name, picker);
	});
}