import UIPlugin from "../src";
import Vue from 'vue/dist/vue.esm.js';
import 'fabric-ui-font/index.scss';

import App from './App.vue';

Vue.use(UIPlugin);

const app = new Vue(App);

window.addEventListener('load', () => app.$mount('#app'));