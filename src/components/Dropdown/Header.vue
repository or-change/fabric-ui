<template>
	<div class="ms-dropdown-header">
		{{ item.text }}
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	name: 'f-dropdown-header',
	mixins: [mixin]
}
</script>
