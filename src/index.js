import './global.scss';

import buttonPlugin from './components/Button';
import labelPlugin from './components/Label';
import menuPlugin from './components/Menu';
import checkboxPlugin from './components/Checkbox';
import radioPlugin from './components/Radio';

const pluginList = [
	buttonPlugin, labelPlugin, menuPlugin, checkboxPlugin, radioPlugin
];

export default function install(Vue) {
	pluginList.forEach(plugin => Vue.use(plugin));
};