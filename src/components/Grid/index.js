import Column from './Column.vue';
import Row from './Row.vue';

const grids = [
	Column, Row
];

export default function install(Vue) {
	grids.forEach(grid => {
		Vue.component(grid.name, grid);
	});
}