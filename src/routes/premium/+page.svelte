<script>
	import { onMount } from 'svelte';
	import { trackEvent } from 'fathom-client';
	import Confirmation from '../../components/Confirmation.svelte';
	onMount(() => {
		trackEvent('premium purchase', {
			_value: '14900'
		});
	});
</script>

<Confirmation />
