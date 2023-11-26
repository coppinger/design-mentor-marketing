<script>
	import '@fontsource-variable/manrope';
	import '../styles.css';

	// SVGs

	// Images
</script>

<svelte:head>
	<title>Page title</title>
</svelte:head>

<div>
	<div class="w-full h-3 bg-pink-500"></div>
	<div class="w-full h-3 bg-violet-700"></div>
	<div class="w-full h-3 bg-blue-900"></div>
</div>

<div class="max-w-screen-2xl mx-auto">
	<slot />
</div>
