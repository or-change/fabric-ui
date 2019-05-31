import './menu.scss';

import MenuDivide from './Divide';
import Menu from './Menu';
import MenuItem from './Item';
import MenuSubItem from './Sub';
import MenuSubSplitItem from './SubSplit';

const menuList = [
	MenuDivide,
	Menu, MenuItem,
	MenuSubItem, MenuSubSplitItem,
];

export default function install(Vue) {
	menuList.forEach(menu => Vue.component(menu.name, menu));
}