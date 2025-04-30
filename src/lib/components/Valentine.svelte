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
		<div class="typing-animation">
			<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">heyy nini!!</p>
			<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">
				would you like to...
			</p>
			<p
				class="bg-gradient-to-r from-pink-700 via-pink-500 to-pink-200 bg-clip-text text-4xl leading-15 font-bold text-transparent md:text-6xl"
			>
				Be My Valentine?
			</p>
			<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">...please?</p>
			<p class="mt-1 text-xl text-black text-shadow-md md:text-3xl dark:text-white">
				I love you &lt;3
			</p>
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
</style>
