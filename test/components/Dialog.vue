<template>
	<div>
		<h2>Dialog</h2>
		<div @click="show1 = !show1">default dialog</div>
		<f-modal id="dialog-1" v-model="show1" :title="title" :stacking="false"
			:text="text"
			type="dialog"
		 />

		<div @click="show2 = !show2">larger header and choiceGroup</div>
		<f-modal
			id="dialog-2" v-model="show2" :title="title"
			:text="text"
			variant="primary" :close-button="false"
			:stacking="false"
			overlay-theme="light"
			type="dialog"
		>
			<div slot="ms-dialog-body">
				<div class="ms-dialog-body">
					<p class="ms-dialog-content">{{ text }}</p>
					<f-radio
						label="Option A"
						value="test1"
						v-model="selected"
					/>

					<f-radio
						label="Option B"
						value="test2"
						v-model="selected"
					/>

					<f-radio
						label="Option c"
						value="test2"
						v-model="selected"
					/>
				</div>
			</div>
		</f-modal>
		
		<div @click="show3 = !show3">Blocking</div>
		<f-modal 
			id="dialog-3" 
			v-model="show3" 
			:stacking="false"
			:text="text" 
			:close-on-backdrop="false"
			:title="title"
			type="dialog"
		 />

		 <div @click="show4 = !show4">Dialog with Top Offset Fixed</div>
		 <f-modal
			id="dialog-4" 
			v-model="show4" 
			:text="text"
			:close-button="false"
			:stacking="false"
			overlay-theme="light"
			type="dialog"
		>
			<div slot="ms-modal-body">
				<div class="ms-modal-body">
					<f-label required>Pick one icon</f-label>
					<f-radio
						label="Option A"
						value="test1"
						v-model="selected"
						icon="ms-Icon ms-Icon--CalendarDay"
					/>

					<f-radio
						label="Option B"
						value="test2"
						v-model="selected"
						icon="ms-Icon ms-Icon--CalendarDay"
					/>

					<f-radio
						label="Option c"
						value="test2"
						v-model="selected"
						icon="ms-Icon ms-Icon--CalendarDay"
					/>

					<h1>Description</h1>
					<p class="ms-modal-content">{{ text }}</p>
				</div>
			</div>
		</f-modal>

		<div @click="show5 = !show5">Modeless Dialog</div>
		<f-modal 
			id="dialog-5" 
			v-model="show5" 
			:stacking="false"
			:text="text" 
			:title="title"
			:overlay="false"
			type="dialog"
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
			title: 'All emails together',
			text: `Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.`,
			selected: 'test1'
		}
	}
}
</script>


