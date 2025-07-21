<script>
	import { theme } from '$lib/stores/theme.js';
	import Stars from '$lib/components/Stars.svelte';

	// Nav Item #2 Dark Mode Toggle function
	const toggleTheme = () => {
		theme.update((current) => (current === 'light' ? 'dark' : 'light'));
	};
</script>

<section class="relative min-h-screen w-full overflow-hidden">
	{#if $theme === 'dark'}
		<!-- Stars -->
		<div class="bg-opacity-30 absolute top-0 left-0 h-2/5 w-full overflow-hidden">
			<Stars />
		</div>

		<!-- Moon -->

		<button
			on:click={toggleTheme}
			class="absolute top-10 right-10 h-16 w-16 rounded-full bg-yellow-100 shadow-lg shadow-yellow-100/30"
			aria-label="Toggle dark mode"
		>
			<div class="absolute top-2 right-2 h-4 w-4 rounded-full bg-indigo-900/20"></div>
		</button>
	{/if}

	{#if $theme === 'light'}
		<!-- Sun -->
		<button
			on:click={toggleTheme}
			class="absolute top-10 right-10 h-16 w-16 rounded-full text-center text-5xl shadow-lg shadow-yellow-200"
			aria-label="Toggle dark mode"
			>☀️
		</button>
	{/if}

	<div class="intro pt-50 text-center md:pt-60">
		<h2
			class="font-[LondonBetween] text-4xl font-bold text-gray-800 md:text-6xl dark:text-gray-300"
		>
			<span class="block md:inline">Jenny</span>
			<span class="block md:inline">x</span>
			<span class="block md:inline">Siddhant</span>
		</h2>
		<h3
			class="to-pink relative bg-gradient-to-r from-pink-700 via-pink-500 bg-clip-text font-[LondonBetween] text-6xl leading-20 font-bold text-transparent md:mt-5 md:text-7xl"
		>
			Forever<br />
			<span class="inline-block md:mt-2">❤️</span>
		</h3>
		<h4 class="mt-8 font-[LondonBetween] text-base text-gray-800 md:text-2xl dark:text-gray-300">
			A little place on the internet to celebrate us!
		</h4>
	</div>
</section>

<style>
	@keyframes heartbeat {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.1);
		}
		40% {
			transform: scale(1);
		}
		55% {
			transform: scale(1.2);
		}
		70% {
			transform: scale(1);
		}
		100% {
			transform: scale(1);
		}
	}
	.animate-heartbeat {
		animation: heartbeat 1.5s ease-in-out infinite;
		will-change: transform;
	}
</style>
