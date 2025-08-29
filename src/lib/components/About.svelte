<script>
	import { onMount } from 'svelte';

	let sectionVisible = false;
	/**
	 * @type {Element}
	 */
	let sectionRef;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				sectionVisible = entries[0].isIntersecting;
			},
			{ threshold: 0.1 }
		);

		if (sectionRef) observer.observe(sectionRef);

		return () => {
			if (sectionRef) observer.unobserve(sectionRef);
		};
	});
</script>

<section class="flex min-h-screen w-full flex-col items-center justify-center rounded-xl p-4">
	<div bind:this={sectionRef} class="relative h-screen w-full overflow-hidden">
		<g>
			<!-- Kim slides in from left -->
			<img
				src="/imgs/kim.webp"
				alt="Kim"
				class="absolute left-0 z-10 mt-60 w-[60vw] max-w-[280px] object-contain transition-all duration-[2000ms]
         ease-in-out sm:w-[45vw] sm:max-w-[400px] md:bottom-0 md:w-[35vw] md:max-w-[350px]"
				class:translate-x-0={sectionVisible}
				class:-translate-x-full={!sectionVisible}
			/>
			<p
				class="relative z-20 hidden w-full max-w-2xl text-center text-lg text-amber-700 dark:text-amber-600"
			>
				<span class=" text-3xl font-semibold underline underline-offset-2">Mr. Kim </span>
				<br />
				<span class="font- text-lg">
					the most feared of them all, yet most respected, truly an enigma,the real og- funshine
					bear</span
				>
			</p>
			<g />
			<!-- Center content -->
			<div class="relative z-20 flex flex-col items-center justify-center">
				<p
					class="z-0 mt-20 bg-gradient-to-b from-amber-400 via-amber-700 to-amber-600 bg-clip-text text-[50px] font-extrabold text-transparent"
				>
					<span class="text-6xl">Meet</span> <br />the gang
				</p>
				<p class="text-5l mt-2 bg-gradient-to-b text-amber-600">
					beware: they take cuddles seriously
				</p>
			</div>

			<g>
				<!-- Olaf slides in from right -->
				<img
					src="/imgs/olaf.webp"
					alt="Olaf"
					class="absolute right-0 bottom-0 z-10 w-[60vw] max-w-[280px] object-contain transition-all
         duration-[2000ms] ease-in-out sm:w-[45vw] sm:max-w-[400px] md:w-[35vw] md:max-w-[300px]"
					class:translate-x-0={sectionVisible}
					class:translate-x-full={!sectionVisible}
				/>
				<p
					class=" absolute bottom-10 left-1/2 z-20 hidden w-full max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300"
				>
					<span class="font-[IceKingdom] text-3xl font-semibold underline underline-offset-2"
						>Olaf
					</span>
					<br />
					<span class="font- text-lg">
						he likes carrots, cuddles, and long walks on the beach
					</span>
				</p>
			</g>
		</g>
	</div>
	<div class="light absolute min-h-screen w-full items-center justify-center rounded-xl p-4"></div>
</section>

<style>
	section {
		background-size: 200% 200%;
		animation: gradient 12s ease infinite;
	}

	.light {
		background:
			url('/imgs/grain.webp'),
			radial-gradient(
				50% 50% at 50% 50%,
				rgba(198, 102, 12, 0.742) 0%,
				rgba(248, 168, 56, 0.2),
				transparent
			);

		mask-image: radial-gradient(
			50% 50% at 50% 50%,
			white,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			transparent
		);
	}
</style>
