<template>
	<div
		class="ms-col"
		:class="[
			`ms-sm${size('sm')}`,
			`ms-md${size('md')}`,
			`ms-lg${size('lg')}`,
			`ms-xl${size('xl')}`,
			`ms-xxl${size('xxl')}`,
			`ms-xxxl${size('xxxl')}`,
			`ms-smOffset${offsetSize('Sm')}`,
			`ms-mdOffset${offsetSize('Md')}`,
			`ms-lgOffset${offsetSize('Lg')}`,
			`ms-xlOffset${offsetSize('Xl')}`,
			`ms-xxlOffset${offsetSize('Xxl')}`,
			`ms-xxxlOffset${offsetSize('Xxxl')}`
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'f-col',
	props: {
		col: {
			type: [String, Number],
			default: 6
		},
		sm: {
			type: [String, Number],
			default: 0
		},
		md: {
			type: [String, Number],
			default: 0
		},
		lg: {
			type: [String, Number],
			default: 0
		},
		xl: {
			type: [String, Number],
			default: 0
		},
		xxl: {
			type: [String, Number],
			default: 0
		},
		xxxl: {
			type: [String, Number],
			default: 0
		},
		offset: {
			type: [String, Number],
			default: 0
		},
		offsetSm: {
			type: [String, Number],
			default: 0
		},
		offsetMd: {
			type: [String, Number],
			default: 0
		},
		offsetLg: {
			type: [String, Number],
			default: 0
		},
		offsetXl: {
			type: [String, Number],
			default: 0
		},
		offsetXxl: {
			type: [String, Number],
			default: 0
		},
		offsetXxxl: {
			type: [String, Number],
			default: 0
		}
	},
	methods: {
		size(type) {
			if (this[type]) {
				return this[type];
			}

			return this.col;
		},
		offsetSize(type) {
			if (this[`offset${type}`]) {
				return this[`offset${type}`];
			}

			return this.offset;
		}
	}
}
</script>

<style lang="scss">

@import 'office-ui-fabric-core/src/sass/_References.scss';

.ms-col {
	float: left;
  position: relative;
  min-height: 1px;
  @include ms-borderBox;
}
</style>
