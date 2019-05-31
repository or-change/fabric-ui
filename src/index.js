import './global.scss';

import buttonPlugin from './components/Button';
import labelPlugin from './components/Label';
import menuPlugin from './components/Menu';

const pluginList = [buttonPlugin, labelPlugin, menuPlugin];

export default function install(Vue) {
	pluginList.forEach(plugin => Vue.use(plugin));
};