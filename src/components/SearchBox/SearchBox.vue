<template>
	<div
		class="ms-search-box content"
		:class="[
			`ms-search-box-${computedSize}`,
			{
				'ms-search-box-enabled': !disabled,
				'ms-search-box-disabled': disabled,
				'ms-search-box-active': active,
				'ms-search-box-border': border
			}
		]"
		@click="active = true; $refs.input.focus()"
		@mouseover="isSearch = true"
		@mouseout="isSearch = false">

		<i :class="[icon ? icon : $fabric.icon.search, 'icon-search']"></i>
		
		<div class="input-wrapper">
			<input
				ref="input"
				type="text"
				:placeholder="placeholder"
				v-model="text"
				:disabled="disabled"
				@input="input"
				@blur="blur" />
			<span>{{ value ? value : placeholder }}</span>
		</div>

		<div
			class="icon-clear"
			:style="{
				'display': value && !disabled ? 'table-cell' : 'none'
			}"
		>
			<button
				type="button"
				:disabled="disabled"
				@click="clear">
				<i :class="$fabric.icon.clear"></i>
			</button>
		</div>
	</div>
</template>

<script>
import mixin from '../mixin';

export default {
	name: 'f-search-box',
	data() {
		return {
			active: false,
			text: null,
			isSearch: false
		}
	},
	mixins: [mixin],
	watch:{
		value(newValue, oldValue) {
			this.text = newValue;
		}
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: true
		},
		icon: {
			type: String
		},
		value: {
			type: String
		},
		placeholder: {
			type: String,
			default: 'Search'
		}
	},
	methods: {
		clear() {
			this.$emit('input', '');
			this.$refs.input.focus();
		},
		input() {
			this.$emit('input', this.text);
			this.$emit('change');
		},
		blur() {
			if (!this.isSearch) {
				this.active = false;
			}
		}
	}
}
</script>

