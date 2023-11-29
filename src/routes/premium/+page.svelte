<script>
	import Footer from '../../components/Footer.svelte';
	import Logo from '../../components/Logo.svelte';
	import { Confetti } from 'svelte-confetti';
</script>

<section class="flex gap-2 flex-col items-center justify-center py-16 px-8 text-center relative">
	<div
		style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden;"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			infinite
			duration="5000"
			amount="200"
			fallDistance="100vh"
		/>
	</div>
	<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M31.9999 6.40002C28.3882 6.40002 25.2097 8.20442 23.2791 10.95C19.9724 10.374 16.4535 11.3464 13.8999 13.9C11.3463 16.4536 10.3739 19.9747 10.9499 23.2792C8.2043 25.2099 6.3999 28.3883 6.3999 32C6.3999 35.6118 8.2043 38.7902 10.9499 40.7209C10.3739 44.0275 11.3463 47.5464 13.8999 50.1C16.4535 52.6536 19.9745 53.626 23.2791 53.05C25.2097 55.7956 28.3882 57.6 31.9999 57.6C35.6116 57.6 38.7901 55.7956 40.7207 53.05C44.0274 53.626 47.5463 52.6536 50.0999 50.1C52.6535 47.5464 53.6259 44.0254 53.0499 40.7209C55.7955 38.7902 57.5999 35.6118 57.5999 32C57.5999 28.3883 55.7955 25.2099 53.0499 23.2792C53.6259 19.9725 52.6535 16.4536 50.0999 13.9C47.5463 11.3464 44.0253 10.374 40.7207 10.95C38.7901 8.20442 35.6116 6.40002 31.9999 6.40002ZM44.7999 21.3334C45.3455 21.3334 45.8912 21.5413 46.3082 21.9584C47.1424 22.7925 47.1424 24.1409 46.3082 24.975L30.1791 41.1042C29.778 41.5053 29.2361 41.7292 28.6707 41.7292C28.1054 41.7292 27.5613 41.5053 27.1624 41.1042L19.7957 33.7375C18.9616 32.9034 18.9616 31.555 19.7957 30.7209C20.6299 29.8867 21.9783 29.8867 22.8124 30.7209L28.6707 36.5792L43.2916 21.9584C43.7086 21.5413 44.2543 21.3334 44.7999 21.3334Z"
			fill="#86EFAC"
		/>
	</svg>

	<h2 class="mt-4">You're in</h2>
	<p class="subtitle">Thank you very much for signing up to LeetUX</p>
	<p class="font-semibold max-w-sm">
		You'll recieve an email shortly with more details. If you have any questions or want to reach
		out about anything, fire away: charlie@leetux.com
	</p>
</section>
<Footer />
