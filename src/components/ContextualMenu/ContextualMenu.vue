<template>
	<div :id="id" v-if="visible"
		class="ms-contextual-menu"
		ref="contextual-menu"
	>
		<f-menu
			:menu="menu"
			:direction="direction"
			ref="menu"
			style="display: block"
			:size="comptedSize"
		/>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-contextual-menu',
	mixins: [mixin],
	data() {
		return {
			outer: null,
			direction: 'right',
			visible: false
		}
	},
	props: {
		id: {
			type: String,
			required: true
		},
		menu: {
			type: Array
		}
	},
	computed: {
		outerId() {
			return `${this.id}__f_contextual_menu_outer`;
		},
	},
	methods: {
		show(x = 0, y = 0) {
			this.$emit('show');

			this.visible = true;

			this.outer = document.createElement('div');

			this.outer.id = this.outerId;

			document.body.appendChild(this.outer);
			this.outer.appendChild(this.$el);

			this.$nextTick(() => {
				this.setPosition(x, y);
			});
		},
		hide() {
			this.$emit('hide');

			this.visible = false;

			if (!this.outer) {
				return;
			}

			document.body.removeChild(this.outer);

			this.outer = null;
		},
		setPosition(x, y) {
			const width = window.innerWidth;
			const height = window.innerHeight;

			const contextualMenu = this.$refs['contextual-menu'];
			
			const info = contextualMenu.getBoundingClientRect();

			contextualMenu.style.left = `${x}px`;
			contextualMenu.style.top = `${y}px`;

			this.direction = 'right';

			if (width - x < info.width && x >= info.width) {
				contextualMenu.style.left = `${width - info.width}px`;
			}

			if (width - x <= 2 * info.width) {
				this.direction = 'left';
			}

			if (height - y < info.height && y >= info.height) {
				contextualMenu.style.top = `${height - info.height}px`;
			}
		}
	},
	mounted() {
		document.body.addEventListener('mousedown', this.hide);
	},
	destroyed() {
		document.body.removeEventListener('mousedown', this.hide);
	}
}
</script>