<script>
	import { draw } from 'svelte/transition';

	import Logo from '../../components/Logo.svelte';

	export let navItems;

	let sheetOpen = false;

	// ShadCN
	import * as Sheet from '$lib/components/ui/sheet';
</script>

<Sheet.Root bind:open={sheetOpen}>
	<Sheet.Trigger class="flex items-center">
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				in:draw={{ duration: 3000 }}
				d="M2.66663 6.66666V9.33332H29.3333V6.66666H2.66663ZM2.66663 14.6667V17.3333H29.3333V14.6667H2.66663ZM2.66663 22.6667V25.3333H29.3333V22.6667H2.66663Z"
				fill="white"
			/>
		</svg></Sheet.Trigger
	>
	<Sheet.Content>
		<Sheet.Header>
			<ul class="flex flex-col gap-8 items-center justify-center w-full">
				<Logo />
				{#each navItems as navItem}
					<li class="text-lg font-semibold" tabindex="-1">
						<a href={`#${navItem.path}`} on:click={() => (sheetOpen = false)}>
							{navItem.text}
						</a>
					</li>
				{/each}
				<Sheet.Close class="text-lg opacity-60 font-semibold">Close Menu</Sheet.Close>
			</ul>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
