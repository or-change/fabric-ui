import './global.scss';

import buttonPlugin from './components/Button';
import labelPlugin from './components/Label';
import menuPlugin from './components/Menu';
import checkboxPlugin from './components/Checkbox';
import radioPlugin from './components/Radio';
import dropdownPlugin from './components/Dropdown';
import linkPlugin from './components/Link';
import ratingPlugin from './components/Rating';
import searchBoxPlugin from './components/SearchBox';
import spinButtonPlugin from './components/SpinButton';

const pluginList = [
	buttonPlugin, labelPlugin, menuPlugin,
	checkboxPlugin, radioPlugin, dropdownPlugin,
	linkPlugin, ratingPlugin,
	searchBoxPlugin, spinButtonPlugin
];

export default function install(Vue) {
	pluginList.forEach(plugin => Vue.use(plugin));
};