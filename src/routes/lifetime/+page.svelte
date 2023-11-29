<script>
	import { onMount } from 'svelte';
	import { trackEvent } from 'fathom-client';
	import Confirmation from '../../components/Confirmation.svelte';
	onMount(() => {
		trackEvent('lifetime purchase', {
			_value: '7900'
		});
	});
</script>

<Confirmation />
