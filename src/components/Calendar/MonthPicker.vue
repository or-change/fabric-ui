<template>
	<div class="ms-calendar-month-wrapper">
		<div class="ms-calendar-monthpicker" v-show="monthPicker">
			<div class="ms-calendar-header">
				<div class="ms-header-text"
					@click="toggle"
				>{{ show.year }}</div>
				<div class="ms-header-tool">
					<button class="ms-calendar-prev"
						@click="prev"
						:disabled="prevDisabled">
						<i class="ms-Icon ms-Icon--Up"></i>
					</button>
					<button class="ms-calendar-next"
						@click="next"
						:disabled="nextDisabled">
						<i class="ms-Icon ms-Icon--Down"></i>
					</button>
				</div>
			</div>

			<div class="ms-calendar-zone">
				<table class="ms-calendar-datepicker-table">
					<tbody>
						<tr v-for="(monthRow, index) in renderMonth"
							:key="`row-${index}`">
							<td 
								v-for="(monthObj, index) in monthRow"
								:key="`col-${index}`"
								>
								<button
									:class="{
										'ms-date-selected': monthObj.value === month && show.year === year,
										'ms-data-enabled': !outBoundary(show.year, monthObj.value)
									}"
									:disabled="outBoundary(show.year, monthObj.value)"
									@click="change(show.year, monthObj.value)"
								>{{ monthObj.text.substring(0, 3) }}</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="ms-calendar-yearpicker" v-show="!monthPicker">
			<div class="ms-calendar-header">
				<div class="ms-header-text"
					@click="toggle"
				>{{ startYear }} - {{ endYear }}</div>
				<div class="ms-header-tool">
					<button class="ms-calendar-prev"
						@click="prev"
						:disabled="prevDisabled">
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
					<tbody>
						<tr v-for="(yearRow, index) in renderYear"
							:key="`row-${index}`">
							<td 
								v-for="(yearValue, index) in yearRow"
								:key="`col-${index}`"
								>
								<button
									:class="{
										'ms-date-selected': yearValue === year,
										'ms-data-enabled': !outBoundary(yearValue)
									}"
									@click="change(yearValue, show.month)"
									:disabled="outBoundary(yearValue)"
								>{{ yearValue }}</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'f-month-picker',
	data() {
		return {
			show: {
				year: null,
				month: null,
			},
			monthPicker: true,
			startYear: null,
			endYear: null
		}
	},
	watch: {
		year() {
			this.show.year = this.year;
		},
		month() {
			this.show.month = this.month;
		}
	},
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
		overlaid: {
			type: Boolean
		},
		maxDate: {
			type: Date
		},
		minDate: {
			type: Date
		}
	},
	computed: {
		renderMonth() {
			const monthList = this.monthList.map((month, index) => {
				return {
					text: month,
					value: index
				}
			});

			return this.splitList(monthList);
		},
		renderYear() {
			const result = [];

			for(let index = 0; index < 12; index++){
				result.push(this.startYear + index);
			}

			return this.splitList(result);
		},
		prevDisabled() {
			if (!this.minDate) {
				return;
			}

			if (this.monthPicker) {
				return this.show.year <= this.minDate.getFullYear();
			}

			return this.startYear <= this.minDate.getFullYear();
		},
		nextDisabled() {
			if (!this.maxDate) {
				return;
			}

			if (this.monthPicker) {
				return this.show.year >= this.maxDate.getFullYear();
			}

			return this.endYear >= this.maxDate.getFullYear();
		}
	},
	methods: {
		prev() {
			if (this.monthPicker) {
				this.show.year--;

				return;
			}

			this.startYear = this.startYear - 12;
			this.endYear = this.endYear -12;
		},
		next() {
			if (this.monthPicker) {
				this.show.year++;

				return;
			}

			this.startYear = this.startYear + 12;
			this.endYear = this.endYear + 12;
		},
		change(year, month) {
			this.$emit('change', {
				year,
				month
			})
		},
		splitList(list) {
			const result = [];

			for(let i = 0; i < list.length; i+=4){
				result.push(list.slice(i,i+4));
			}

			return result;
		},
		toggle() {
			if (this.overlaid) {
				return this.$emit('hide');
			}

			this.monthPicker = !this.monthPicker;

			if (!this.monthPicker) {
				this.startYear = 12 * Math.floor(this.show.year / 12) + 1;
				this.endYear = 12 * Math.ceil(this.show.year / 12);
			}
		},
		outBoundary(year, month) {
			if (!month && month !== 0) {
				return (
					this.minDate && year < this.minDate.getFullYear()
				) || (
					this.maxDate && year > this.maxDate.getFullYear()
				);
			}
			
			return (
				this.minDate && year <= this.minDate.getFullYear() && month < this.minDate.getMonth()
			) || (
				this.maxDate && year >= this.maxDate.getFullYear() && month > this.maxDate.getMonth()
			);
		}
	},
	mounted() {
		this.show.year = this.year;
		this.show.month = this.month;
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-calendar-month-wrapper {
	display: inline-block;
	height: 100%;
	width: auto;
}

.ms-calendar-wrapper {
	.ms-calendar-monthpicker table tr td button.ms-data-enabled,
	.ms-calendar-yearpicker table tr td button.ms-data-enabled{

		&:hover {
			cursor: pointer;
			background: $ms-color-gray30;
			color: $ms-color-gray190;
		}
	}
}

.ms-calendar-md {
	&.ms-calendar-overlaid {
		.ms-calendar-monthpicker, .ms-calendar-yearpicker {
			margin-left: 0px;
		}
	}

	.ms-calendar-monthpicker, .ms-calendar-yearpicker {
		margin-left: 12px;

		tr td button  {
			width: 40px;
			height: 40px;
			line-height: 40px;
			margin: 0 12px 16px 0;
		}

		tr td:last-child button {
			margin-right: 0px;
		}
	}
}
</style>

