<template>
	<div>
		<h2>Pagination</h2>

		<f-pagination :number-of-pages="10" :limit="5" />

		<f-pagination style="margin-top: 10px" :number-of-pages="10" :limit="6" />

		<f-pagination style="margin-top: 10px" :number-of-pages="10" :limit="6" bar/>

		<f-pagination style="margin-top: 10px" :number-of-pages="20" :limit="10" border/>
	</div>
</template>
