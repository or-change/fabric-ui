import './global.scss';

import componentList from './components';

export default {
	install(Vue) {
		componentList.forEach(component => Vue.use(component));
	}
};