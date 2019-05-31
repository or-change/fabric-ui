import './button.scss';

import DefaultButton from './Default';
import CompoundButton from './Compound';
import IconButton from './Icon';
import ActionButton from './Action';
import AnchorButton from './Anchor';
import AriaButton from './Aria';
import CommandButton from './Command';
import Contextual from './Contextual';
import SplitButton from './Split';
import ToggleButton from './Toggle.vue';

const buttonList = [
	DefaultButton, CompoundButton,
	IconButton, ActionButton,
	AnchorButton, AriaButton, CommandButton,
	Contextual, SplitButton, ToggleButton
];

export default function install(Vue) {
	buttonList.forEach(button => {
		Vue.component(button.name, button)
	});
};