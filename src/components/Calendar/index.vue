<template>
	<div class="ms-calendar ms-calendar-md"
		:class="{
			'ms-calendar-outline': outline
		}"
	>	
		<div class="ms-calendar-wrapper">
			<div class="ms-calendar-datepicker">
				<div class="ms-calendar-header">
					<div class="ms-header-text">
						{{ monthText }} {{ year }}
					</div>
					<div class="ms-header-tool">
						<button class="ms-calendar-prev" @click="prev">
							<i class="ms-Icon ms-Icon--Up"></i>
						</button>
						<button class="ms-calendar-next" @click="next">
							<i class="ms-Icon ms-Icon--Down"></i>
						</button>
					</div>
				</div>

				<div class="ms-calendar-zone">
					<table class="ms-calendar-datepicker-table">
						<thead>
							<tr>
								<th
									v-for="(day, index) in dayList" :key="index"
									:title="day">{{ day.substring(0, 1) }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(dates, index) in dateList"
								:key="`row-${index}`">
								<td 
									v-for="(date, index) in dates"
									:key="`col-${index}`"
									:class="{
										'ms-date-selected': date.isSelected
									}"
									>
									<button
										:class="{
											'ms-today': date.isToday
										}"
										@click="input(date)"
									>{{ date.date }}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="ms-calendar-divider"></div>
	
			<div class="ms-calendar-monthpicker">
				<div class="ms-calendar-header">
					<div class="ms-header-text">{{ this.year }}</div>
					<div class="ms-header-tool">
						<button class="ms-calendar-prev" @click="">
							<i class="ms-Icon ms-Icon--Up"></i>
						</button>
						<button class="ms-calendar-next" @click="next">
							<i class="ms-Icon ms-Icon--Down"></i>
						</button>
					</div>
				</div>

				<div class="ms-calendar-zone">
					<table class="ms-calendar-datepicker-table">
						<tbody>
							<tr v-for="(monthRow, index) in monthList"
								:key="`row-${index}`">
								<td 
									v-for="(month, index) in monthRow"
									:key="`col-${index}`"
									>
									<button
										:class="{
											'ms-date-selected': month.isSelected
										}"
										@click=""
									>{{ month.text.substring(0, 3) }}</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- <div class="ms-calendar-yearpicker">
				<div class="ms-calendar-header">
					<div class="ms-header-text"></div>
					<div class="ms-header-tool">
						<button class="ms-calendar-prev"></button>
						<button class="ms-calendar-next"></button>
					</div>
				</div>

				<div class="ms-calendar-zone">
					<table class="ms-calendar-datepicker-table">
						<thead>

						</thead>
						<tbody>
							<tr>
								<td>
									<button></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div> -->

			<button class="ms-calendar-goto" :disabled="gotoTodayDisabled"
				@click="setValue(new Date())">
				Go to today
			</button>
		</div>
		<!-- <div class="ms-select-tool">
			<button class="ms-select-prev"></button>
			<button class="ms-select-next"></button>
		</div> -->
	</div>
</template>

<script>
const monthList = [
	'January', 'February ', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
];

const dayList = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday',
	'Thursday', 'Friday', 'Saturday'
];

export default {
	name: 'f-calendar',
	data() {
		return {
			date: null,
			year: null,
			month: null,
			dayList
		}
	},
	props: {
		value: {
			type: Date,
			validator(value) {
				return value instanceof Date;
			},
			default: () => new Date()
		},
		monthOnly: {
			type: Boolean,
			default: false
		},
		yearPicker: {
			type: Boolean,
			default: true
		},
		monthPicker: {
			type: Boolean,
			default: true
		},
		overlaid: {
			type: Boolean,
			default: false
		},
		minDate: {
			type: Boolean
		},
		maxDate: {
			type: Boolean
		},
		select: {
			type: Boolean,
			default: false
		},
		goToToday: {
			type: Boolean,
			default: true
		},
		selectTool: {
			type: Boolean,
			default: true
		},
		outline: {
			type: Boolean,
			default: false
		}
	},
	computed: {
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

			for (let date = 0; date < firstDay; date++) {
				dateList.unshift(this.dateFactory(prevYear, preMonth, prevDates - date));
			}

			const nextYear = this.month === 11 ? this.year + 1 : this.year;
			const nextMonth = this.month === 11 ? 0 : this.month + 1;

			for (let date = 0; date < 6 - lastDay; date++) {
				dateList.push(this.dateFactory(nextYear, nextMonth, 1 + date));
			}

			for(let i = 0; i < dateList.length; i+=7){
				result.push(dateList.slice(i,i+7));
			}

			return result;
		},
		monthList() {
			const result = [];

			const list = monthList.map((month, index) => {
				return {
					text: month,
					value: index,
					isSelected: this.month === index
				}
			});

			for(let i = 0; i < list.length; i+=4){
				result.push(list.slice(i,i+4));
			}

			return result;
		},
		yearList() {
			const startYear = 12 * Math.floor(this.year / 12) + 1;
			const result = new Array(12).fill('');

			return result.map((item, index) => startYear + index);
		},
		monthText() {
			let text;

			this.monthList.forEach(month => {
				if (this.month === month.value) {
					text = month.text;
				}
			});

			return text;
		},
		gotoTodayDisabled() {
			const today = new Date();

			return this.year === today.getFullYear() && this.month === today.getMonth();
		}
	},
	watch: {
		value(newValue) {
			this.setValue(newValue);
		}
	},
	methods: {
		setValue(date) {
			this.year = date.getFullYear();
			this.month = date.getMonth();
			this.date = date.getDate();
		},
		dateFactory(year, month, date) {
			const today = new Date();

			function isEqual(dateObj) {
				return dateObj.getFullYear() === year && dateObj.getMonth() === month && dateObj.getDate() === date;
			}

			return {
				year, month, date,
				isToday: isEqual(today),
				isSelected: isEqual(this.value)
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
		input(dateObj) {
			this.$emit('input', new Date(dateObj.year, dateObj.month, dateObj.date));
		}
	},
	mounted() {
		this.setValue(this.value);
	}
}
</script>
