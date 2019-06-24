<template>
	<div class="ms-group-base ms-group-md"
		:class="{
			'ms-group': !compact,
			'ms-group-compact': compact
		}"
	>
		<div class="ms-group-item" v-for="(item, index) in group">
			<button class="ms-group-check">
				<div class="ms-group-wrapper">
					<i class="ms-Icon ms-Icon--CircleRing"></i>
					<i class="ms-Icon ms-Icon--StatusCircleCheckmark ms-check"></i>
				</div>
			</button>
			<div class="ms-group-header">
				<button class="ms-group-extend">
					<i class="ms-Icon ms-Icon--ChevronRightMed"></i>
				</button>
				<div class="ms-group-title">

				</div>
			</div>
			<div class="ms-group-content">
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'f-group',
	data() {
		return {
			isExtend: [],
			selectedList: null
		}
	},
	props: {
		compact: {
			type: Boolean,
			default: false
		},
		group: {
			type: Array,
			default: null
		},
		selectMode: {
			type: String,
			default: null //single, multi
		}
	},
	computed: {
		computedGroup() {
			function computedList(list, parent = [] ,result = []) {
				list.forEach(group => {
					const { id, label, children, items } = group;

					result.push({id, label, parent, canExtend: !!(children && children.length)});

					if (items) {
						items.forEach(item => {
							item.canExtend = false;
							item.parent = parent.concat([label]);

							result.push(item);
						});
					}

					if (children && children.length) {
						result = computedList(children, parent.concat([label]), result);
					}
				});

				return result;
			}
			
			return computedList(this.group);
		},
		renderGroup() {
			return this.computedGroup.filter(group => {
				if (group.parent.length === 0) {
					return true;
				}

				let isExtend = true;

				group.parent.forEach((parent, index) => {
					isExtend = isExtend && this.isExtend.indexOf(group.parent.slice(0, index + 1).join(' ')) !== -1
				});

				return isExtend;
			});
		}
	}
}
</script>
