<template>
	<div>
		<h2>Command Button</h2>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:border="false"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			:triangle="true"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		
		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu('menu2')"
			:dropdown="true"
			:split="true"
			:disabled="true"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>

		<f-button
			:disabled="true"
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@click="toggleMenu"
			:dropdown="true"
			button-type="contextual"
		>
			<div slot="menu"></div>

		</f-button>

		<br />

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:border="false"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			:triangle="true"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		
		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu('menu2')"
			:dropdown="true"
			:split="true"
			:disabled="true"
			size="sm"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>

		<f-button
			:disabled="true"
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
			size="sm"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
			size="sm"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@click="toggleMenu"
			:dropdown="true"
			size="sm"
		>
			<div slot="menu"></div>

		</f-button>

		<br />

		<f-button
			icon="ms-Icon ms-Icon--Add"
			:border="false"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			:triangle="true"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			@click.native="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		<f-button
			dropdown-disabled
			disabled
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>
		
		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			:dropdown="true"
			:split="true"
			@dropdown="toggleMenu('menu1')"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu1" style="top:100%"  />

		</f-button>

		<f-button
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu('menu2')"
			:dropdown="true"
			:split="true"
			:disabled="true"
			size="lg"
		>
			<f-menu slot="menu" :menu="menu" ref="menu2" style="top:100%" />

		</f-button>

		<f-button
			:disabled="true"
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
			size="lg"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:dropdown-disabled="true"
			variant="primary"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@dropdown="toggleMenu"
			:dropdown="true"
			:split="true"
			size="lg"
		>
			<div slot="menu"></div>

		</f-button>

		<f-button
			:disabled="true"
			icon="ms-Icon ms-Icon--Add"
			text="Create account"
			@click="toggleMenu"
			:dropdown="true"
			size="lg"
		>
			<div slot="menu"></div>

		</f-button>
	</div>
</template>

<script>
import mixin from './mixin';

export default {
	mixins: [mixin]
}
</script>
