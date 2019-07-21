<template>
	<div class="ms-calendar-datepicker ms-calendar-datepicker-md"
		:class="{
			'ms-calendar-range': range
		}"
	>
		<div class="ms-calendar-header">
			<div class="ms-header-text"
				@click="$emit('handler-click')"
			>
				{{ monthList[month] }} {{ year }}
			</div>
			<div class="ms-header-tool">
				<button class="ms-calendar-prev"
					@click="prev"
					:disabled="prevDisabled"
				>
					<i :class="$fabric.icon.prev"></i>
				</button>
				<button class="ms-calendar-next"
					@click="next"
					:disabled="nextDisabled"	
				>
					<i :class="$fabric.icon.next"></i>
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
							:style="{
								padding: weekNumber ? '2px 1px' : '2px'
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
</template>

<script>
// 直接拿Date对象，然后开始computed，就还好

import mixin from './mixin';

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
	name: 'f-date-picker',
	mixins: [mixin],
	data() {
		return {
			monthList,
			date: null,
			year: null,
			month: null,
			isRange: false
		}
	},
	props: {
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
		prevDisabled() {
			if (!this.minDate) {
				return false;
			}

			return new Date(this.year, this.month, this.date).getTime() <= this.minDate.getTime();
		},
		nextDisabled() {
			if (!this.maxDate) {
				return false;
			}

			return new Date(this.year, this.month, this.date).getTime() >= this.maxDate.getTime(); 
		}
	},
	watch: {
		value() {
			this.setValue(this.value);
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

			this.$emit('prev', {
				year: this.year, month: this.month
			});
		},
		next() {
			if (this.month < 11) {
				this.month++;
			} else {
				this.year++;
				this.month = 0;
			}

			this.$emit('next', {
				year: this.year, month: this.month
			});
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
		},
		getWeekNumber(year, month, date) {
			return Math.ceil((new Date(year, month, date) - new Date(year, 0, 1)) / 86400000 / 7);
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
				isToday: isEqual(new Date()),
				isSelected: !this.range ? isEqual(this.value) : (this.from && dateObj.getTime() >= this.from.getTime() && this.to && dateObj.getTime() <= this.to.getTime()),
				isDisabled: (this.minDate && dateObj.getTime() < this.minDate.getTime()) || (this.maxDate && dateObj.getTime() > this.maxDate.getTime()) || isDisabled
			}
		}
	},
	mounted() {
		const today = new Date();

		this.setValue(this.value);

		if (this.range) {
			this.year = today.getFullYear();
			this.month = today.getMonth();
			this.date = today.getDate();
		}
	}
}
</script>

<style lang="scss">
@import 'office-ui-fabric-core/src/sass/_References.scss';

.ms-calendar-datepicker {
	position: relative;
	box-sizing: border-box;
	font-family: inherit;
	display: inline-block;
	width: auto;
	background-color: $ms-color-white;
}

.ms-calendar-datepicker table tr td.ms-data-enabled:hover {
	cursor: pointer;
	background: $ms-color-gray30;
	color: $ms-color-gray190;
}

.ms-calendar-range .ms-calendar-zone table.ms-calendar-datepicker-table tr td {
	border-radius: 0px;
}

.ms-calendar-datepicker-md {
	&.ms-calendar-datepicker {
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


