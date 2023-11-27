<script>
	export let navItems;
</script>

<ul class="hidden md:flex gap-10 items-center">
	{#each navItems as { text, path }}
		<li><a class="font-semibold text-slate-50" href={`#${path}`}>{text}</a></li>
	{/each}
</ul>
