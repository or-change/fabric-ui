<template>
	<div>
		<h2>group</h2>
		<f-group :group="group" />
	</div>
</template>


<script>
export default {
	data() {
		return {
			group: [{
				id: 0,
				label: 'group0',
				children: [
					{
						id: 1,
						label: 'group0-0',
						children: [
							{
								id: 2,
								label: 'group0-0-0',
								items: [
									{
										thumbnail: '//placehold.it/164x164',
										key: 'item-0 Lorem ipsum dolor sit',
										name: 'Lorem ipsum dolor sit amet,'
									},
									{
										thumbnail: '//placehold.it/164x164',
										key: 'item-0 Lorem ipsum dolor sit',
										name: 'Lorem ipsum dolor sit amet,'
									},
									{
										thumbnail: '//placehold.it/164x164',
										key: 'item-0 Lorem ipsum dolor sit',
										name: 'Lorem ipsum dolor sit amet,'
									}
								]
							}
						]
					}
				]
			}]
		}
	}
}
</script>
