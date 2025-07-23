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

<section
	class="flex min-h-screen w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 via-white to-blue-200 p-4 dark:bg-gradient-to-br dark:from-amber-900/50 dark:via-black dark:to-white/30"
>
	<div bind:this={sectionRef} class="relative h-screen w-full overflow-hidden">
		<!-- Kim slides in from left -->
		<img
			src="/kim.webp"
			alt="Kim"
			class="absolute left-0 z-10 mt-10 h-[70vh] max-h-[500px] scale-50 object-contain transition-all duration-[2000ms] ease-in-out md:mt-20 md:max-h-[1000px]"
			class:translate-x-0={sectionVisible}
			class:-translate-x-full={!sectionVisible}
		/>

		<!-- Center content -->
		<div class="flex items-center justify-center">
			<p
				class="z-0 mt-20 bg-gradient-to-b from-amber-400 via-amber-700 to-amber-950 bg-clip-text font-[PlayfulBoxes] text-[60px] font-bold text-transparent"
			>
				WELCOME
			</p>
		</div>

		<!-- Olaf slides in from right -->
		<img
			src="/olaf.webp"
			alt="Olaf"
			class="absolute right-0 z-10 mt-30 h-[70vh] max-h-[500px] scale-50 object-contain transition-all duration-[2000ms] ease-in-out md:mt-20 md:max-h-[1000px]"
			class:translate-x-0={sectionVisible}
			class:translate-x-full={!sectionVisible}
		/>
	</div>
</section>

<style>
	section {
		background-size: 200% 200%;
		animation: gradient 12s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
