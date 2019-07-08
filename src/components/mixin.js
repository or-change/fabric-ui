const SIZE_REG = /(sm|md|lg)/;

export default {
	props: {
		size: {
			type: String,
			validator(value) {
				const result = SIZE_REG.test(value)

				if (!result) {
					console.warn('The value of size should be one of sm, md, lg');
				}

				return result;
			}
		}
	},
	computed: {
		computedSize() {
			return this.size ? this.size : this.$fabric.size;
		}
	}
}