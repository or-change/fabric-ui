export default {
	props: {
		value: {
			type: [Object, Date],
			default: () => new Date()
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
		}
	}
}