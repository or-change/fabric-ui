import './progress.scss';

import Progress from './index.vue';

export default function install(Vue) {
	Vue.component(Progress.name, Progress);
}