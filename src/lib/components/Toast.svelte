<script>
	import { onMount } from 'svelte';
	export let message = '';
	export let duration = 3000;

	let visible = false;

	onMount(() => {
		// Trigger slide-in
		visible = true;

		// Auto-dismiss
		const timer = setTimeout(() => {
			visible = false;
		}, duration);

		return () => clearTimeout(timer);
	});
</script>

<div
	class="fixed right-4 bottom-4 z-50 max-w-sm rounded-xl border border-white/20 bg-white/10 px-4
         py-3 text-white shadow-lg backdrop-blur-lg transition-transform duration-500"
	class:translate-x-0={visible}
	class:translate-x-full={!visible}
	style="will-change: transform;"
>
	{message}
</div>
