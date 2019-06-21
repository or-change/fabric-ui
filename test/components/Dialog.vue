<template>
	<div>
		<h2>Dialog</h2>
		<div @click="show1 = !show1">default dialog</div>
		<f-dialog id="dialog-1" v-model="show1" :title="title" :stacking="false"
			:text="text"
		 />

		<div @click="show2 = !show2">larger header and choiceGroup</div>
		<f-dialog
			id="dialog-2" v-model="show2" :title="title"
			:text="text"
			variant="primary" :close-button="false"
			:stacking="false"
			overlay-theme="light"
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

					<div class="ms-dialog-action">
						<f-button 
							theme="primary"
							text="Save"
							@click="ok" />
						<f-button
							text="Cancel"
							@click="cancel" />
					</div>
				</div>
			</div>
		</f-dialog>
		
		<div @click="show3 = !show3">Blocking</div>
		<f-dialog 
			id="dialog-3" 
			v-model="show3" 
			:stacking="false"
			:text="text" 
			:close-on-backdrop="false"
			:title="title"
		 />

		 <div @click="show4 = !show4">Dialog with Top Offset Fixed</div>
		 <f-dialog
			id="dialog-4" 
			v-model="show4" 
			:text="text"
			:close-button="false"
			:stacking="false"
			overlay-theme="light"
		>
			<div slot="ms-dialog-body">
				<div class="ms-dialog-body">
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
					<p class="ms-dialog-content">{{ text }}</p>

					<div class="ms-dialog-action">
						<f-button 
							theme="primary"
							text="Save"
							@click="ok" />
						<f-button
							text="Cancel"
							@click="cancel" />
					</div>
				</div>
			</div>
		</f-dialog>

		<div @click="show5 = !show5">Modeless Dialog</div>
		<f-dialog 
			id="dialog-3" 
			v-model="show5" 
			:stacking="false"
			:text="text" 
			:title="title"
			:overlay="false"
		 />
	</div>
</template>

<script>
export default {
	data() {
		return {
			show1: false,
			show2: true,
			show3: false,
			show4: true,
			show5: false,
			title: 'All emails together',
			text: `Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.`,
			selected: 'test1'
		}
	},
	methods: {
		ok() {
			this.show2 = false;
		},
		cancel() {
			this.show2 = false;
		}
	}
}
</script>

