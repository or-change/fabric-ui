import './global.scss';

import buttonPlugin from './components/Button';
import labelPlugin from './components/Label';
import menuPlugin from './components/Menu';
import checkboxPlugin from './components/Checkbox';

const pluginList = [buttonPlugin, labelPlugin, menuPlugin, checkboxPlugin];

export default function install(Vue) {
	pluginList.forEach(plugin => Vue.use(plugin));
};