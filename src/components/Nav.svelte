<script>
	export let navItems;
</script>

<ul class="hidden md:flex gap-10 items-center">
	{#each navItems as { text, path }}
		<li>
			<a
				class="font-semibold opacity-80 hover:opacity-100 transition-all ease-linear duration-150 delay-75"
				href={`#${path}`}>{text}</a
			>
		</li>
	{/each}
</ul>
