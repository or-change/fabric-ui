<template>
	<div>
		<h2>SearchBox</h2>
		<f-search-box v-model="value" size="lg" />
		<f-search-box v-model="value" />
		<f-search-box v-model="value" size="sm" />

		<f-search-box v-model="value" :border="false" />
		<f-search-box v-model="value" disabled />
		<f-search-box v-model="value" :border="false" disabled />

		<f-search-box v-model="value" :icon="icon" :placeholder="placeholder" />
		<f-search-box v-model="value" :border="false" :icon="icon" :placeholder="placeholder" />
		<f-search-box v-model="value" disabled :icon="icon" :placeholder="placeholder" />
		<f-search-box v-model="value" :border="false" disabled :icon="icon" :placeholder="placeholder" />

		<f-search-box v-model="value" :border="false" size="lg" />
		<f-search-box v-model="value" disabled size="lg" />
		<f-search-box v-model="value" :border="false" disabled size="lg" />

		<f-search-box v-model="value" :icon="icon" :placeholder="placeholder" size="lg" />
		<f-search-box v-model="value" :border="false" :icon="icon" :placeholder="placeholder" size="lg" />
		<f-search-box v-model="value" disabled :icon="icon" :placeholder="placeholder" size="lg" />
		<f-search-box v-model="value" :border="false" disabled :icon="icon" :placeholder="placeholder" size="lg" />

		<f-search-box v-model="value" :border="false" size="sm" />
		<f-search-box v-model="value" disabled  size="sm" />
		<f-search-box v-model="value" :border="false" disabled size="sm" />

		<f-search-box v-model="value" :icon="icon" :placeholder="placeholder" size="sm"  />
		<f-search-box v-model="value" :border="false" :icon="icon" :placeholder="placeholder" size="sm" />
		<f-search-box v-model="value" disabled :icon="icon" :placeholder="placeholder" size="sm" />
		<f-search-box v-model="value" :border="false" disabled :icon="icon" :placeholder="placeholder" size="sm" />

		<div style="width: 200px">
			<f-search-box v-model="value" :icon="icon" :placeholder="placeholder" />
			<f-search-box v-model="value" :border="false" :icon="icon" :placeholder="placeholder" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: null,
			icon: 'ms-Icon ms-Icon--Filter',
			placeholder: 'Filter'
		}
	}
}
</script>

<style lang="scss" scoped>
.ms-search-box {
	margin-bottom: 20px;
}
</style>


