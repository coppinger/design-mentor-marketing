<script>
	import { scrollStack } from '$lib/animation';
	export let target = '';

	$: outerWidth = 0;
	$: if (outerWidth > 767) {
		scrollStack(target);
	}
</script>

<svelte:window bind:outerWidth />

<div class="flex flex-col h-fit">
	<slot />
</div>
