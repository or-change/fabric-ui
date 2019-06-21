<template>
	<f-modal>
		
	</f-modal>
</template>

<script>
import mixin from './mixin';
import FModal from './Modal';

export default {
	name: 'f-panel',
	mixins: [mixin],
	components: { FModal },
	props: {

	},
	watch: {
		value() {

		}
	},
	methods: {
		setVisible() {

		}
	},
	mounted() {
		this.setVisible();
	}
}
</script>

<style lang="scss">

</style>

