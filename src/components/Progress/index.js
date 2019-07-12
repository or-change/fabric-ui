import './progress.scss';

import Progress from './progress.vue';

export default function install(Vue) {
	Vue.component(Progress.name, Progress);
}