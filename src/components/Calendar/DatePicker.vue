<template>
	<div class="ms-calendar-datepicker"
		
	>
		<div class="ms-calendar-header">
			<div class="ms-header-text"
				@click="$emit('hide')"
			>
				{{ monthList[month] }} {{ year }}
			</div>
			<div class="ms-header-tool">
				<button class="ms-calendar-prev"
					@click="$emit('prev')"
					:disabled="prevDisabled"
				>
					<i class="ms-Icon ms-Icon--Up"></i>
				</button>
				<button class="ms-calendar-next"
					@click="$emit('next')"
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
								@click="$emit('input', date)"
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
const dayList = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday',
	'Thursday', 'Friday', 'Saturday'
];

export default {
	name: 'f-date-picker',
	props: {
		year: {
			type: Number,
			default: new Date().getFullYear()
		},
		month: {
			type: Number,
			default: new Date().getMonth()
		},
		monthList: {
			type: Array
		},
		weekNumber: {
			type: Boolean,
			default: false
		},
		disabledDate: {
			type: Array
		},
		minDate: {
			type: Date
		},
		maxDate: {
			type: Date
		},
		startDay: {
			type: Number
		},
		from: {
			type: Date
		},
		to: {
			type: Date
		},
		value: {
			type: [Object, Date]
		},
		range: {
			type: Boolean
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
	methods: {
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
	}
}
</script>

