<template>
	<div
		 class="ms-calendar ms-calendar-md"
		:class="{
			'ms-calendar-outline': outline,
			'ms-calendar-overlaid': overlaid
		}"
	>
		<div class="ms-calendar-wrapper"
			:class="{
				'ms-calendar-wrapper-overlaid': overlaid
			}"
		>
			<f-date-picker
				ref="date-picker"
				v-show="DatePickerShow"
				:week-number="weekNumber"
				:disabled-date="disabledDate"
				:min-date="minDate"
				:max-date="maxDate"
				:start-day="startDay"
				:range="range"
				:value="renderDate"
				@input="updateValue"
				@handler-click="isShow = false"
				@prev="updateYear"
				@next="updateYear"
			/>

			<div class="ms-calendar-divider" v-show="!overlaid"></div>

			<f-month-picker
				ref="month-picker"
				v-show="monthPickerShow"
				:overlaid="overlaid"
				:min-date="minDate"
				:max-date="maxDate"
				:value="monthPickerDate"
				@change="updateYear"
				@handler-click="isShow = true"
				@prev="updateYear"
				@next="updateYear"
			/>

			<button v-show="!range" class="ms-calendar-goto" :disabled="gotoTodayDisabled"
				@click="updateValue(new Date())"
				:class="{
					'ms-calendar-monthpicker-goto': monthPickerShow
				}"
				>
				Go to today
			</button>
		</div>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-calendar',
	mixins: [mixin],
	data() {
		return {
			today: new Date(),
			isRange: false,
			isShow: true
		}
	},
	props: {
		overlaid: {
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
			if (!this.range) {
				return this.renderDate.getFullYear() === this.today.getFullYear() && this.renderDate.getMonth() === this.today.getMonth();
			}
		},
		DatePickerShow() {
			if (!this.overlaid) {
				return true;
			}

			return this.isShow;
		},
		monthPickerShow() {
			if (!this.overlaid) {
				return true;
			}

			return !this.isShow;
		},
		renderDate() {
			if (this.range) {
				return {
					from: this.value && this.value.from ? this.value.from : new Date(),
					to: this.value && this.value.to ? this.value.to : new Date()
				}
			} else {
				return this.value ? this.value : new Date();
			}
		},
		monthPickerDate() {
			if (this.range) {
				return this.renderDate.to;
			} else {
				return this.renderDate;
			}
		}
	},
	methods: {
		updateValue(value) {
			this.$emit('input', value);
		},
		updateYear({year, month}) {
			const datePicker = this.$refs['date-picker'];
			const monthPicker = this.$refs['month-picker'];

			datePicker.year = year;
			datePicker.month = month;
			monthPicker.show.year = year;
			monthPicker.show.month = month;
			monthPicker.year = year;
			monthPicker.month = month;
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss">
@import 'scss/_References.scss';

.ms-calendar {
	display: inline-block;

	&.ms-calendar-outline .ms-calendar-wrapper{
		box-shadow: rgba(0, 0, 0, 0.133) 0px 6.4px 14.4px 0px, rgba(0, 0, 0, 0.11) 0px 1.2px 3.6px 0px;
	}

	&.ms-calendar-overlaid {
		.ms-calendar-monthpicker, .ms-calendar-yearpicker {
			margin-left: 0px;
		}
	}
	
	.ms-calendar-wrapper {
		display: block;
		width: auto;
		box-sizing: content-box;
		position: relative;

		.ms-calendar-divider {
			display: inline-block;
			height: 100%;
			width: auto;
		}
	}

	.ms-calendar-goto {
		width: auto;
		padding: 0 3px;
		font-size: $ms-font-size-12;
		font-weight: $ms-font-weight-regular;
		position: absolute;
		color: $ms-color-gray160;
	}
}

.ms-calendar-wrapper  .ms-calendar-divider {
	border-right: 1px solid $ms-color-gray30;
	top: 0;
	position: relative;
}

.ms-calendar-md {
	.ms-calendar-divider {
		margin: -10px 0;
		padding: 10px 0;
	}

	.ms-calendar-wrapper {
		height: 235px;
		padding: 20px 15px;
	}

	.ms-calendar-wrapper-overlaid {
		padding-bottom: 28px;
	}

	.ms-calendar-monthpicker-goto.ms-calendar-goto {
		bottom: 22px;
	}

	.ms-calendar-goto {
		right: 20px;
		height: 30px;
		bottom: 5px;
    line-height: 30px;
	}
}
</style>


