<template>
	<div
		@click.stop
		class="ms-datepicker">
		<f-text-field
			icon="ms-Icon ms-Icon--CalendarWeek"
			:placeholder="placeholder"
			readonly
			:label="label"
			:disabled="disabled"
			:required="required"
			@click.native="toggle"
			:value="text"
			:size="computedSize"
		/>
		<f-calendar
			v-show="isShow"
			:outline="true"
			:overlaid="overlaid"
			:month-only="monthOnly"
			:month-picker="monthPicker"
			:start-day="startDay"
			:week-number="weekNumber"
			:min-date="minDate"
			:max-date="maxDate"
			:disabled-date="disabledDate"
			:range="range"
			:go-to-today="goToToday"
			@selected="input"
			v-model="date"
		/>
	</div>
</template>
    
<script>
import mixin from '../mixin';

const dayList = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday',
	'Thursday', 'Friday', 'Saturday'
];

const monthList = [
	'January', 'February ', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
];

export default {
	name: 'f-datepicker',
	data() {
		return {
			isShow: false,
			date: new Date()
		}
	},
	mixins: [mixin],
	props: {
		id: {
			type: String
		},
		value: {
			type: Date,
			default: new Date()
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		overlaid: {
			type: Boolean,
			default: false
		},
		monthOnly: {
			type: Boolean,
			default: false
		},
		monthPicker: {
			type: Boolean,
			default: true
		},
		startDay: {
			type: Number,
			default: 0
		},
		weekNumber: {
			type: Boolean,
			default: false
		},
		minDate: {
			type: Date,
			default: null
		},
		maxDate: {
			type: Date,
			default: null
		},
		disabledDate: {
			type: Array,
			default: () => {
				return [];
			}
		},
		range: {
			type: Boolean,
			default: false
		},
		goToToday: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: String,
			default: 'Select a date...'
		}
	},
	computed: {
		text() {
			if (!this.date || !this.value) {
				return;
			}

			return `${dayList[this.date.getDay()].slice(0, 3)} ${monthList[this.date.getMonth()].slice(0, 3)} ${this.date.getDate()} ${this.date.getFullYear()}`
		}
	},
	methods: {
		show() {
			this.isShow = true;
			this.$emit('show');
			this.$root.$emit('f::datepicker::show', this.id);
		},
		hide(id) {
			if (!id || this.id === id) {
				return;
			}

			this.isShow = false;
			this.$emit('hide');
		},
		toggle() {
			this.isShow ? this.hide() : this.show()
		},
		setDate() {
			if (this.value) {
				this.date = new Date(this.value);
			}
		},
		input() {
			this.$emit('input', this.date);
			this.$emit('select');
		}
	},
	watch: {
		value() {
			this.setDate();
		}
	},
	mounted() {
		this.setDate();

		document.body.addEventListener('click', this.hide);
		this.$root.$on('f::datepicker::show', this.hide);
	},
	destroyed() {
		document.body.removeEventListener('click', this.hide);
		this.$root.$off('f::datepicker::show', this.hide);
	}
}
</script>

