<template>
	<div>
		<h2>Panel</h2>

		<div @click="show1 = !show1">right and sm panel</div>
		<f-modal id="panel-1" v-model="show1" :title="title" :stacking="false"
			:text="text"
			type="panel"
		 />

		<div @click="show2 = !show2">left and sm panel</div>
		<f-modal id="panel-2" v-model="show2" :title="title" :stacking="false"
			:text="text"
			type="panel" position="left"
		 />

		<div @click="show3 = !show3">fluid panel</div>
		<f-modal id="panel-3" v-model="show3" :title="title" :stacking="false"
			:text="text"
			type="panel" position="left"
			size="fluid"
		 />

		<div @click="show4 = !show4">md + right panel</div>
		<f-modal id="panel-4" v-model="show4" :title="title" :stacking="false"
			:text="text"
			type="panel"
			size="md"
		 />

		<div @click="show5 = !show5">md + left panel</div>
		<f-modal id="panel-5" v-model="show5" :title="title" :stacking="false"
			:text="text"
			type="panel" position="left"
			size="md"
		 />

		<div @click="show6 = !show6">extract large panel</div>
		<f-modal id="panel-6" v-model="show6" :title="title" :stacking="false"
			:text="text"
			type="panel" position="left"
			width="600px"
		 />
	</div>
</template>

<script>
export default {
	data() {
		return {
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			show5: false,
			show6: true,
			title: 'Panel - Small, right-aligned, fixed, with footer',
			text: `Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.`,
			selected: 'test1'
		}
	}
}
</script>
