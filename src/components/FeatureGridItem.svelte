<script>
	export let title;
	export let content;
</script>

<div
	class="flex flex-col bg-[#0F172A] bg-opacity-[64%] border-8 border-[#020617] border-opacity-[32%] rounded-[32px] w-full overflow-hidden"
>
	<div class="flex items-center justify-center py-12">
		<slot />
	</div>
	<div class="flex flex-col p-8 bg-slate-900 h-full">
		<p class="text-xl font-bold text-white mb-2">{title}</p>
		<p class="text-slate-400 font-bold">{content}</p>
	</div>
</div>
