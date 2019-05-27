import './global.scss';

import componentCollection from './components';
import directiveCollection from './directives';

export default {
	install(Vue) {
		for (let name in componentCollection) {
			Vue.component(name, componentCollection[name]);
		}

		for (let name in directiveCollection) {
			Vue.directive(name, directiveCollection[name]);
		}
	}
};