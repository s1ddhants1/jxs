<script>
	import { theme } from '$lib/stores/theme.js';
	import Stars from '$lib/components/Stars.svelte';

	const toggleTheme = () => {
		theme.update((current) => (current === 'light' ? 'dark' : 'light'));
	};

	let startDate1 = new Date('2024-06-04');
	let startDate2 = new Date('2025-06-30');
	let daysPassed1 = Math.floor((new Date().getTime() - startDate1.getTime()) / (1000 * 3600 * 24));
	let daysPassed2 = Math.floor((new Date().getTime() - startDate2.getTime()) / (1000 * 3600 * 24));
	const Lines = [
		'a little place on the internet to celebrate us!',
		'we have music, cute plushies, and lots of love',
		'and a little bit of magic',
		'and ever and ever and ever',
		'so happy together 🎶',
		'cat->🐶',
		'pineapples > mangoes',
		'insert quirky loading screen tip',
		'vs monkey was ' + daysPassed2 + ' days ago',
		'counting stars, counting days, counting love',
		'this site is powered by hugs and smiles',
		daysPassed1 + ' days of us being us'
	];
	function getRandomLine() {
		const randomIndex = Math.floor(Math.random() * Lines.length);
		return Lines[randomIndex];
	}
	let currentLine = getRandomLine();
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
			class="absolute top-10 right-10 h-12 w-12 rounded-full bg-yellow-100 shadow-lg shadow-yellow-100/30 md:h-16 md:w-16"
			aria-label="Toggle dark mode"
		>
			<div class="absolute top-2 right-2 h-3 w-3 rounded-full bg-indigo-900/20 md:h-4 md:w-4"></div>
		</button>
	{/if}

	{#if $theme === 'light'}
		<!-- Blue Sky-->
		<div class="absolute top-0 left-0 hidden h-2/5 w-full overflow-hidden bg-cyan-300/40 blur-xl">
			<Stars />
		</div>

		<button
			on:click={toggleTheme}
			class="absolute top-10 right-10 flex items-center justify-center rounded-full bg-yellow-300 shadow-xl shadow-yellow-100"
			aria-label="Toggle light mode"
		>
			<!-- Sun glow layer -->
			<div class="absolute z-0 h-20 w-20 rounded-full bg-amber-300/40 blur-2xl"></div>
			<!-- Central sun circle -->
			<div
				class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300"
			>
				<!-- Sun rays -->
				<div class="relative h-32 w-32 md:h-32 md:w-32">
					<div class="absolute inset-0 flex items-center justify-center">
						{#each Array.from({ length: 12 }) as _, i}
							<span
								class="absolute block h-1 w-10 rounded-full bg-yellow-300"
								style="transform: rotate({i * 30}deg) translateY(-29px)"
							></span>
						{/each}
					</div>
				</div>
			</div>
		</button>
	{/if}

	<div class="pt-[22vh] text-center md:pt-60">
		<h1
			class="z-20 font-[LondonTwo] text-5xl text-gray-800 text-shadow-md md:text-6xl dark:text-gray-300"
		>
			<span class="block md:inline">Jenny</span>
			<span class="block md:inline">x</span>
			<span class="block md:inline">Siddhant</span>
		</h1>
		<h2
			class="animate-gradient relative bg-gradient-to-r from-pink-700 via-pink-600 to-pink-600 bg-clip-text font-[LondonTwo] text-6xl leading-20 text-transparent md:mt-5 md:text-7xl dark:from-pink-800 dark:via-pink-500 dark:to-pink-800"
		>
			Forever<br />
		</h2>
		<h3
			class="animate-heartbeat relative bg-gradient-to-r from-pink-700 via-pink-500 bg-clip-text font-[LondonTwo] text-6xl md:mt-2 md:text-7xl"
		>
			{#if $theme === 'dark'}
				<img src="/imgs/heart-dark.webp" alt="" class="inline h-22 w-22 md:h-28 md:w-28" />
			{:else}
				<img src="/imgs/heart-dark.webp" alt="" class="inline h-18 w-18 md:h-28 md:w-28" />
			{/if}
		</h3>
		<h4
			class="mt-8 bg-gradient-to-r from-pink-700 via-pink-500 bg-clip-text font-[LondonBetween] text-base font-bold text-gray-800 md:text-2xl dark:text-gray-300"
		>
			{currentLine}
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
		backface-visibility: hidden;
		transform: translateZ(0);
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}
	.animate-gradient {
		background-size: 200% auto;
		animation: gradient 3s linear infinite;
	}
</style>
