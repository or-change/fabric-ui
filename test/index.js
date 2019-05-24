import UIPlugin from "../src";
import Vue from 'vue';

import App from './App.vue';

Vue.use(UIPlugin);

const app = new Vue({ App });

window.addEventListener('load', () => app.$mount('#app'));