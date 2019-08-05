<template>
	<div class="ms-tab"
		:class="[
			`ms-tab-${type}`,
			`ms-tab-${computedSize}`
		]"
	>
		<slot name="tab-header">
			<div class="ms-tab-header">
				<f-button
					v-for="(tabTitle, index) in tabTitleList"
					:key="index"
					:border="false"
					:bar="true"
					:icon="tabTitle.icon"
					:text="tabTitle.text"
					:size="computedSize"
					@click="changeActiveItem(index)"
					class="ms-tab-title"
					:class="{
						'ms-tab-title-active': index === activeIndex
					}"
				/>
			</div>
		</slot>
		<div class="ms-tab-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-tabs',
	data() {
		return {
			activeIndex: 0,
			tabItemList: []
		}
	},
	mixins: [mixin],
	props: {
		type: {
			type: String,
			default: 'default' //default
		},
		value: {
			type: Number,
			default: 0
		}
	},
	watch: {
		value() {
			this.activeTabItem(this.value);
		}
	},
	computed: {
		tabTitleList() {
			if (this.tabItemList) {
				return this.tabItemList.map(tabItem => {
					const { title, icon } = tabItem.data.attrs;

					return {
						text: title, icon
					};
				});
			}

			return [];
		}
	},
	methods: {
		getTabItemList() {
			const tabItemList = this.$slots.default;

			this.tabItemList = tabItemList.filter(tabItem => tabItem.componentOptions && tabItem.componentOptions.tag === 'f-tab-item');
		},
		activeTabItem(index) {
			if (!index || index < 0) {
				index = 0;
			}

			if (index > this.tabItemList.length) {
				index = this.tabItemList.length;
			}

			this.activeIndex = index;

			this.$emit('input', this.activeIndex);

			this.tabItemList.forEach((tabItem, index) => {
				if (!tabItem.elm) {
					return;
				}

				tabItem.elm.style.display = 'none';

				if (index === this.value) {
					tabItem.elm.style.display = 'block';
				}
			});
		},
		changeActiveItem(index) {
			this.$emit('change', index);
			this.activeTabItem(index);
		}
	},
	mounted() {
		this.getTabItemList();
		this.activeTabItem(this.value);
	}
}
</script>
