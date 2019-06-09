const EVENT_TOGGLE = 'fv::toggle::dropdown';
let listener = null;

export default {
	bind(el, binding, vnode) {
		const {	modifiers, value } = binding;
		const targets = Object.keys(modifiers);

		if (value) {
			targets.push(value);
		}

		listener = function () {
			targets.forEach(target => {
				vnode.context.$root.$emit(EVENT_TOGGLE, target, vnode.elm)
			});
		}

		vnode.elm.addEventListener('click', listener);
	},
	unbind(el, binding, vnode) {
		vnode.elm.removeEventListener('click', listener);
	}
};