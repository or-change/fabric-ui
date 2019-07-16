import 'normalize.css';
import './style/global.scss';

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
import togglePlugin from './components/Toggle';
import sliderPlugin from './components/Slider';
import calendarPlugin from './components/Calendar';
import textFieldPlugin from './components/TextField';
import datePickerPlugin from './components/Datepicker';
import progressPlugin from './components/Progress';
import modalPlugin from './components/modal';
import listPlugin from './components/List';
import paginationPlugin from './components/Pagination';
import messageBarPlugin from './components/MessageBar';
import calloutPlugin from './components/Callout';
import contextualMenuPlugin from './components/ContextualMenu';
import tabPlugin from './components/Tab';
import gridPlugin from './components/Grid';

const pluginList = [
	buttonPlugin, labelPlugin, menuPlugin,
	checkboxPlugin, radioPlugin, dropdownPlugin,
	linkPlugin, ratingPlugin,
	searchBoxPlugin, spinButtonPlugin,
	togglePlugin, sliderPlugin,
	calendarPlugin,
	textFieldPlugin, datePickerPlugin,
	progressPlugin, modalPlugin,
	listPlugin, paginationPlugin,
	messageBarPlugin, calloutPlugin,
	contextualMenuPlugin,
	tabPlugin, gridPlugin
];

function normalize(options) {
	if (typeof options.size !== 'string') {
		options.size = 'md';
	}

	return options;
}

export default function install(Vue, options = {}) {
	Vue.prototype.$fabric = normalize(options);

	// 组件命名空间可以配置

	pluginList.forEach(plugin => Vue.use(plugin));
};