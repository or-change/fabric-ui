import './label.scss';
import Label from './Label.vue';

export default function install(Vue) {
	Vue.component(Label.name, Label);
}