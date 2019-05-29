import buttonList from './Button';
import label from './label/Label.vue';
import menuList from './Menu';

export default concatComponentList(buttonList, [label], menuList);

function concatComponentList(...list) {
	let result = [];

	list.forEach(componentList => {
		result = result.concat(componentList);
	});

	return result;
}