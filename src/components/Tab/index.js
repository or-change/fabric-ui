import './tab.scss';

import Tabs from './Tab.vue';
import TabItem from './TabItem.vue';

const tab = [
	Tabs, TabItem
];

export default function install(Vue) {
	tab.forEach(component => {
		Vue.component(component.name, component);
	})
}