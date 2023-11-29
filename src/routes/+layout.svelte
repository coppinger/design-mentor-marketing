<script>
	import '@fontsource-variable/manrope';
	import '../styles.css';

	import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';
</script>

<svelte:head>
	<script
		src="https://cdn.usefathom.com/script.js"
		data-spa="auto"
		data-site="TOADOEDA"
		defer
	></script>
	<!-- Primary Meta Tags -->
	<title>LeetUX — UI/UX & product design challenges for developers</title>

	<link rel="icon" href="https://leetux.com/images/favicon.png" />

	<meta name="title" content="LeetUX — UI/UX & product design challenges for developers" />
	<meta
		name="description"
		content="Design challenges that quickly teach you everything you need to build functional and clean interfaces."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://leetux.com" />
	<meta property="og:title" content="LeetUX — UI/UX & product design challenges for developers" />
	<meta
		property="og:description"
		content="Design challenges that quickly teach you everything you need to build functional and clean interfaces."
	/>
	<meta property="og:image" content="https://leetux.com/images/meta-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://leetux.com/" />
	<meta
		property="twitter:title"
		content="LeetUX — UI/UX & product design challenges for developers"
	/>
	<meta
		property="twitter:description"
		content="Design challenges that quickly teach you everything you need to build functional and clean interfaces."
	/>
	<meta property="twitter:image" content="https://leetux.com/images/meta-image.jpg" />
</svelte:head>

<PlausibleAnalytics />

<div>
	<div class="w-full h-2 bg-pink-500"></div>
	<div class="w-full h-2 bg-violet-700"></div>
	<div class="w-full h-2 bg-blue-900"></div>
</div>

<div
	class="max-w-screen-2xl mx-auto 2xl:border-[#242C4D] 2xl:border-l-8 2xl:border-r-8 2xl:border-opacity-[32%] overflow-x-hidden relative"
>
	<slot />
</div>

<div>
	<div class="w-full h-2 bg-pink-500"></div>
	<div class="w-full h-2 bg-violet-700"></div>
	<div class="w-full h-2 bg-blue-900"></div>
</div>
