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
			<div class="ms-calendar-datepicker" v-if="!monthOnly"
				v-show="!overlaid || isShow"
			>
				<div class="ms-calendar-header">
					<div class="ms-header-text"
						@click="isShow = false"
					>
						{{ monthList[month] }} {{ year }}
					</div>
					<div class="ms-header-tool">
						<button class="ms-calendar-prev"
							@click="prev"
							:disabled="prevDisabled"
						>
							<i class="ms-Icon ms-Icon--Up"></i>
						</button>
						<button class="ms-calendar-next"
							@click="next"
							:disabled="nextDisabled"	
						>
							<i class="ms-Icon ms-Icon--Down"></i>
						</button>
					</div>
				</div>

				<div class="ms-calendar-zone">
					<table class="ms-calendar-datepicker-table">
						<thead>
							<tr>
								<th v-if="weekNumber"></th>
								<th
									v-for="(day, index) in dayList" :key="index"
									:title="day">{{ day.substring(0, 1) }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(dates, index) in dateList"
								:key="`row-${index}`">
								<th v-if="weekNumber">
									{{ getWeekNumber(dates[dates.length - 1].year, dates[dates.length - 1].month, dates[dates.length - 1].date) }}
								</th>
								<td 
									v-for="(date, index) in dates"
									:key="`col-${index}`"
									:class="{
										'ms-date-selected': date.isSelected,
										'ms-data-enabled': !date.isDisabled
									}"
									>
									<button
										:class="{
											'ms-today': date.isToday
										}"
										@click="input(date)"
										:disabled="date.isDisabled"
									>{{ date.date }}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="ms-calendar-divider" v-if="!monthOnly && !overlaid"></div>

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
	name: 'f-calendar',
	components: {
		FMonthPicker
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
		dayList() {
			return dayList.slice(this.startDay).concat(dayList.slice(0, this.startDay))
		},
		dayValue() {
			return this.dayList.map(day => dayList.indexOf(day));
		},
		dateList() {
			const currentDates = new Date(this.year, this.month + 1, '').getDate();
			let prevDates;

			if (this.month === 0) {
				prevDates = new Date(this.year - 1, 12, '').getDate()
			} else {
				prevDates = new Date(this.year, this.month, '').getDate()
			}

			const firstDay = new Date(this.year, this.month, 1).getDay();
			const lastDay = new Date(this.year, this.month, currentDates).getDay();
			const dateList = [];
			const result = [];

			for (let date = 1; date <= currentDates; date++) {
				dateList.push(this.dateFactory(this.year, this.month, date));
			}

			const prevYear = this.month === 0 ? this.year - 1 : this.year;
			const preMonth = this.month === 0 ? 11 : this.month - 1;

			for (let date = 0; date < this.dayValue.indexOf(firstDay); date++) {
				dateList.unshift(this.dateFactory(prevYear, preMonth, prevDates - date));
			}

			const nextYear = this.month === 11 ? this.year + 1 : this.year;
			const nextMonth = this.month === 11 ? 0 : this.month + 1;

			for (let date = 0; date < 6 - this.dayValue.indexOf(lastDay); date++) {
				dateList.push(this.dateFactory(nextYear, nextMonth, 1 + date));
			}

			for(let i = 0; i < dateList.length; i+=7){
				result.push(dateList.slice(i,i+7));
			}

			return result;
		},
		gotoTodayDisabled() {
			return this.year === this.today.getFullYear() && this.month === this.today.getMonth();
		},
		prevDisabled() {
			if (!this.minDate) {
				return false;
			}

			return this.year <= this.minDate.getFullYear() && this.month <= this.minDate.getMonth();
		},
		nextDisabled() {
			if (!this.maxDate) {
				return false;
			}

			return this.year >= this.maxDate.getFullYear() && this.month >= this.maxDate.getMonth(); 
		}
	},
	watch: {
		value(newValue) {
			this.setValue(newValue);
		}
	},
	methods: {
		getWeekNumber(year, month, date) {
			return Math.ceil((new Date(year, month, date) - new Date(year, 0, 1)) / 86400000 / 7);
		},
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
		dateFactory(year, month, date) {
			const dateObj = new Date(year, month, date);
			let isDisabled = false;

			this.disabledDate.forEach(date => {
				if (date.getTime() === dateObj.getTime()) {
					isDisabled = true;
				}
			})

			function isEqual(dateObj) {
				return dateObj.getFullYear() === year && dateObj.getMonth() === month && dateObj.getDate() === date;
			}

			return {
				year, month, date,
				isToday: isEqual(this.today),
				isSelected: !this.range ? isEqual(this.value) : (this.from && dateObj.getTime() >= this.from.getTime() && this.to && dateObj.getTime() <= this.to.getTime()),
				isDisabled: (this.minDate && dateObj.getTime() < this.minDate.getTime()) || (this.maxDate && dateObj.getTime() > this.maxDate.getTime()) || isDisabled
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
			width: $ms-font-size-28;
			height: $ms-font-size-28;
			line-height: $ms-font-size-28;
		}

		tbody tr th {
			border-right: 1px solid $ms-color-gray30;
		}

		tr td button {
			width: $ms-font-size-24;
			height: $ms-font-size-24;
			line-height: $ms-font-size-24;
			margin-top: 2px;
		}
	}
}
</style>


