<template>
	<div
		 class="ms-calendar ms-calendar-md"
		:class="{
			'ms-calendar-outline': outline,
			'ms-calendar-range': range,
			'ms-calendar-overlaid': overlaid
		}"
	>
		<div class="ms-calendar-wrapper"
			:class="{
				'ms-calendar-wrapper-overlaid': overlaid || !monthPicker
			}"
		>
			<f-date-picker
				v-if="!monthOnly"
				v-show="!overlaid || isShow"
				:month="month"
				:year="year"
				:month-list="monthList"
				:week-number="weekNumber"
				:disabled-date="disabledDate"
				:min-date="minDate"
				:max-date="maxDate"
				:start-day="startDay"
				:value="value"
				:range="range"
				:from="from"
				:to="to"
				@hide="isShow = false"
				@prev="prev"
				@next="next"
				@input="input"
			/>

			<div class="ms-calendar-divider" v-show="!monthOnly && !overlaid"></div>

			<f-month-picker
				:month="month"
				:year="year"
				:overlaid="overlaid"
				:month-list="monthList"
				@change="change"
				@hide="isShow = true"
				:min-date="minDate"
				:max-date="maxDate"
				v-show="!overlaid || !isShow"
			/>

			<button v-if="!range" class="ms-calendar-goto" :disabled="gotoTodayDisabled"
				@click="setValue(new Date())"
				:class="{
					'ms-calendar-monthpicker-goto': !overlaid || !isShow
				}"
				>
				Go to today
			</button>
		</div>
	</div>
</template>

<script>
import FMonthPicker from './MonthPicker';
import FDatePicker from './DatePicker';

const monthList = [
	'January', 'February ', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
];

export default {
	name: 'f-calendar',
	components: {
		FMonthPicker,
		FDatePicker
	},
	data() {
		return {
			date: null,
			year: null,
			month: null,
			today: new Date(),
			monthList,
			from: null,
			to: null,
			isRange: false,
			isShow: true
		}
	},
	props: {
		value: {
			type: [Object, Date],
			default: () => new Date()
		},
		monthOnly: {
			type: Boolean,
			default: false
		},
		monthPicker: {
			type: Boolean,
			default: true
		},
		overlaid: {
			type: Boolean,
			default: false //实现overlaid
		},
		startDay: {
			type: Number,
			validator(value) {
				return value >= 0 && value <= 6;
			},
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
			validator(value) {
				let validate = true;

				value.forEach(date => {
					validate = date instanceof Date
				});

				return validate;
			},
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
		outline: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		gotoTodayDisabled() {
			return this.year === this.today.getFullYear() && this.month === this.today.getMonth();
		}
	},
	watch: {
		value(newValue) {
			this.setValue(newValue);
		}
	},
	methods: {
		setValue(date) {
			if (this.range) {
				this.from = date && date.from ? date.from : null;
				this.to = date && date.to ? date.to : null;
			} else {
				this.year = date.getFullYear();
				this.month = date.getMonth();
				this.date = date.getDate();
			}
		},
		prev() {
			if (this.month > 0) {
				this.month--;
			} else {
				this.year--;
				this.month = 11;
			}
		},
		next() {
			if (this.month < 11) {
				this.month++;
			} else {
				this.year++;
				this.month = 0;
			}
		},
		change({year, month}) {
			this.year = year;
			this.month = month;

			if (this.monthOnly) {
				return this.$emit('input', new Date(this.year, this.month, this.date));
			}
		},
		input(dateObj) {
			if (!this.range) {
				
				this.$emit('input', new Date(dateObj.year, dateObj.month, dateObj.date));
				this.$emit('selected');

				return;
			}

			if (!this.isRange) {
				this.from = new Date(dateObj.year, dateObj.month, dateObj.date);
				this.to = null;

				this.isRange = true;
			} else {
				const to = new Date(dateObj.year, dateObj.month, dateObj.date);
				
				this.from.getTime() < to.getTime() ? this.to = to : (this.to = this.from,this.from = to);

				this.isRange = false;

				this.$emit('input', {
					from: this.from, to: this.to
				});

				this.$emit('selected');
				return;
			}
		}
	},
	mounted() {
		this.setValue(this.value);

		if (this.range) {
			this.year = this.today.getFullYear();
			this.month = this.today.getMonth();
			this.date = this.today.getDate();
		}
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-calendar-wrapper {
	.ms-calendar-datepicker table tr td.ms-data-enabled:hover {
		cursor: pointer;
		background: $ms-color-gray30;
		color: $ms-color-gray190;
	}

	.ms-calendar-divider {
		border-right: 1px solid $ms-color-gray30;
		top: 0;
		position: relative;
	}
}

.ms-calendar-md {
	.ms-calendar-datepicker, .ms-calendar-divider {
		margin: -10px 0;
		padding: 10px 0;
	}

	.ms-calendar-datepicker {
		thead tr th, tr td {
			width: 24px;
			height: 24px;
			line-height: 24px;
			padding: 2px;
		}

		tbody tr th {
			border-right: 1px solid $ms-color-gray30;
		}

		tr td button {
			width: $ms-font-size-24;
			height: $ms-font-size-24;
			line-height: $ms-font-size-24;
		}
	}
}
</style>


