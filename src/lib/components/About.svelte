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
		<!-- Kim slides in from left -->
		<img
			src="/imgs/kim.webp"
			alt="Kim"
			class="absolute left-0 z-10 mt-10 h-[70vh] max-h-[500px] scale-50 object-contain transition-all duration-[2000ms] ease-in-out md:mt-20 md:max-h-[1000px]"
			class:translate-x-0={sectionVisible}
			class:-translate-x-full={!sectionVisible}
		/>

		<!-- Center content -->
		<div class="flex items-center justify-center">
			<p
				class="z-0 mt-20 bg-gradient-to-b from-amber-400 via-amber-700 to-amber-950 bg-clip-text font-[LondonTwo] text-[60px] font-bold text-transparent"
			>
				Welcome
			</p>
		</div>

		<!-- Olaf slides in from right -->
		<img
			src="/imgs/olaf.webp"
			alt="Olaf"
			class="absolute right-0 z-10 mt-30 h-[70vh] max-h-[500px] scale-50 object-contain transition-all duration-[2000ms] ease-in-out md:mt-20 md:max-h-[1000px]"
			class:translate-x-0={sectionVisible}
			class:translate-x-full={!sectionVisible}
		/>
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
			url('/grain.webp'),
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
