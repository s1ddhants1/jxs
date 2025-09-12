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
	<div class="absolute inset-0 z-10">
		<Confetti />
	</div>

	<div class="light z-20 flex items-center justify-center p-40 font-[LondonBetween] font-bold">
		<div
			class="z-20 rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:p-8 dark:bg-white/5"
		>
			<div class="typing-animation">
				<p class="text-xl text-black text-shadow-md md:text-3xl dark:text-white">heyy nini!!</p>
				<p class=" text-xl text-black text-shadow-md md:text-3xl dark:text-white">
					would you like to...
				</p>
				<p
					class="animate-gradient bg-gradient-to-r from-pink-700 via-pink-400 to-pink-700 bg-clip-text text-4xl leading-10 font-bold text-transparent text-shadow-pink-500 md:text-6xl"
				>
					Be My Valentine?
				</p>
				<p class="text-xl text-black text-shadow-md md:text-3xl dark:text-white">...please?</p>
				<p class="text-xl text-black text-shadow-md md:text-3xl dark:text-white">
					I love you &lt;3
				</p>
			</div>
		</div>
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

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}
	.animate-gradient {
		background-size: 200% auto;
		animation: gradient 4s linear infinite;
	}
</style>
