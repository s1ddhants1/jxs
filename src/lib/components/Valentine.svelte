<script>
	import { onMount } from 'svelte';
	import Confetti from './Confetti.svelte';

	let lines;
	let delay = 0;

	onMount(() => {
		lines = document.querySelectorAll('.typing-animation p');
		lines.forEach((line) => {
			setTimeout(() => {
				// @ts-ignore
				line.style.width = line.scrollWidth + 'px';
				// @ts-ignore
				line.style.opacity = 1;
				setTimeout(() => {
					// @ts-ignore
					line.style.borderRight = 'none';
				}, 2000);
			}, delay);
			delay += 2500;
		});
	});
</script>

<section class="h-screen w-full overflow-hidden">
	<div class="fixed inset-0 z-10 h-screen overflow-hidden">
		<Confetti />
	</div>

	<div
		class="fixed z-20 flex w-full items-center justify-center p-40 font-[LondonBetween] font-bold text-nowrap"
	>
		<div
			class="max-w-md rounded-xl border border-white/20 bg-white/10 p-7 shadow-lg backdrop-blur-md md:p-4 dark:bg-white/5"
		>
			<div class="typing-animation">
				<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">
					heyy nini!!
				</p>
				<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">
					would you like to...
				</p>
				<p
					class="bg-gradient-to-r from-pink-700 via-pink-500 to-pink-200 bg-clip-text text-4xl leading-15 font-bold text-transparent text-shadow-pink-500 md:text-6xl"
				>
					Be My Valentine?
				</p>
				<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">...please?</p>
				<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">
					I love you &lt;3
				</p>
			</div>
		</div>
		<svg class="glow-heart absolute z-[-10] flex" width="195" height="135" viewBox="0 0 65 45">
			<path
				d="M32.5,41 Q2.5,21 14,10 A13,13,0,0,1,32.5,15 A13,13,0,0,1,51,10 Q62.5,21 32.5,41 Z"
				fill="#ec4899"
				stroke="white"
				stroke-width="2"
				filter="drop-shadow(0 0 48px #fad1d7)"
			/>
		</svg>
	</div>
</section>

<style>
	.typing-animation p {
		display: block;
		opacity: 0;
		white-space: nowrap;
		overflow: hidden;
		border-right: 0.1em solid white;
		width: 0;
		margin: 0;
		margin: 0.5rem 0;
		transition:
			width 2s ease,
			opacity 1s ease;
	}
	.glow-heart {
		filter: drop-shadow(0 0 32px pink) drop-shadow(0 0 8px gold);
	}
</style>
