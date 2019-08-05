<template>
	<div>
		<h2>Modal</h2>
		<div @click="show1 = !show1">default modal</div>
		<f-modal id="modal-1" v-model="show1" title="123" :stacking="false" :draggable="true">
			<div
				slot="ms-modal-body"
				class="ms-modal-body"
			>
				<f-text-field
					label="名称："
					placeholder="project 1"
					underline
				/>
			</div>

		</f-modal>

		<div @click="show2 = !show2">primary and center modal</div>
		<f-modal id="modal-2" v-model="show2" title="123"
			variant="primary" :text="text" overlay-theme="light"
			:draggable="true" :stacking="false"
		 />

		<div @click="show3 = !show3">primary modal</div>
		<f-modal id="modal-3" v-model="show3" title="123"
			variant="primary" :text="text" overlay-theme="light"
			:draggable="true" :centered="false"
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
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.`
		}
	}
}
</script>
