<template>
	<div>
		<h2>Grid</h2>

		<f-row>
			<f-col col="8">
				<div class="fill">col=8</div>
			</f-col>
			<f-col col="3" offset-sm="1" offset-xxxl="1">
				<div class="fill">col=3;offset-sm=1</div>
			</f-col>
		</f-row>

		<f-row>
			<f-col col="4">
				<div class="fill">col=8</div>
			</f-col>
			<f-col col="4" offset="2">
				<div class="fill">col=3;offset-sm=1</div>
			</f-col>
		</f-row>
	</div>
</template>

<style lang="scss">
.fill {
	width: 100%;
	overflow: hidden;
	background-color: rgba(86,61,124,.15);
	height: 50px;
	padding: 0 20px;
	line-height: 50px;
}
</style>

