<template>
	<div class="ms-row">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'f-row',
	mounted() {
		const isError = this.$slots.default.filter(tabItem => {
			return tabItem.tag && (!tabItem.componentOptions || tabItem.componentOptions.tag !== 'f-col');
		})
			.length > 0;


		if (isError) {
			throw new Error('The child of f-row component must be f-col component.')
		}
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-row {
	display: block;
	width: 100%;
	@include ms-borderBox;
  @include ms-clearfix; 
}
</style>
