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

<section class="flex min-h-screen w-full items-center justify-center rounded-xl p-4">
	<div bind:this={sectionRef} class="flex flex-col md:flex-row">
		<!-- Kim slides in from left -->
		<img
			src="/imgs/kim.webp"
			alt="Kim"
			class="relative z-10 w-[60vw] max-w-[280px] object-contain transition-all duration-[2000ms] ease-in-out"
			class:-translate-x-10={sectionVisible}
			class:-translate-x-full={!sectionVisible}
		/>
		<p
			class="relative z-20 hidden w-full max-w-2xl text-center text-lg text-amber-700 dark:text-amber-600"
		>
			<span class=" text-3xl font-semibold underline underline-offset-2">Mr. Kim </span>
			<br />
			<span class="font- text-lg">
				the most feared of them all, yet most respected, truly an enigma,the real og- funshine bear</span
			>
		</p>

		<!-- Center content -->
		<div
			class="relative z-20 items-center justify-between text-center opacity-0 transition-all delay-[1200ms] duration-1000 ease-out"
			class:opacity-100={sectionVisible}
			class:scale-100={sectionVisible}
			class:scale-90={!sectionVisible}
		>
			<p
				class="bg-gradient-to-b from-amber-400 via-amber-700 to-amber-600 bg-clip-text text-[50px] font-extrabold text-transparent md:mt-20"
			>
				<span class="text-6xl">Meet</span> <br />the gang <br />
			</p>
			<span class="text-lg text-amber-600">beware: they take cuddles seriously</span>
		</div>
		<!-- Olaf slides in from right -->
		<img
			src="/imgs/olaf.webp"
			alt="Olaf"
			class="relative z-10 w-[60vw] max-w-[250px] object-contain transition-all
         duration-[2000ms] ease-in-out"
			class:translate-x-10={sectionVisible}
			class:translate-x-full={!sectionVisible}
		/>
		<p
			class="relative bottom-10 left-1/2 z-20 hidden w-full max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300"
		>
			<span class="text-3xl font-semibold underline underline-offset-2">Olaf </span>
			<br />
			<span class="font- text-lg"> he likes carrots, cuddles, and long walks on the beach </span>
		</p>
	</div>
	<div
		class="light absolute h-225 min-h-[500px] w-200 items-center justify-center rounded-xl p-4"
	></div>
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
