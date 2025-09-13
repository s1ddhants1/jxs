<script lang="ts">
	import { onMount } from 'svelte';

	let showIntro = true;

	onMount(() => {
		setTimeout(() => {
			showIntro = false;
		}, 2000);
	});
</script>

{#if showIntro}
	<div class="fixed inset-0 z-100 flex items-center justify-center bg-white dark:bg-black">
		<span
			class="animate-fadeUpBlur font-[LondonBetween] text-3xl font-bold text-black md:text-4xl dark:text-white"
		>
			Welcome!
		</span>
	</div>
{:else}
	<!-- Main content reveal -->
	<div class="circle-reveal fixed inset-0 bg-white dark:bg-black"></div>
{/if}

<style>
	@keyframes fadeUpBlur {
		0% {
			opacity: 0;
			transform: translateY(0px);
			filter: blur(0px);
		}
		50% {
			opacity: 0.5;
			transform: translateY(0);
			filter: blur(10px);
		}
		100% {
			opacity: 1;
			transform: translateY(-40px);
			filter: blur(0px);
		}
	}

	.animate-fadeUpBlur {
		animation: fadeUpBlur 2s ease forwards;
	}

	@keyframes circleExpand {
		0% {
			clip-path: circle(0% at 50% 50%);
		}
		50% {
			clip-path: circle(150% at 50% 50%);
		}
		100% {
			clip-path: circle(150% at 50% 50%);
			opacity: 0;
		}
	}

	.circle-reveal {
		animation: circleExpand 3s ease forwards;
	}
</style>
