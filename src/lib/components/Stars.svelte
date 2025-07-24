<script lang="ts">
	let twinklingStars = Array(100)
		.fill(0)
		.map(() => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 1.5 + 0.5,
			opacity: Math.random() * 0.7 + 0.3,
			delay: Math.random() * 5
		}));
</script>

<div class="relative h-screen w-full overflow-hidden">
	{#each twinklingStars as star, i}
		<div
			class="absolute animate-pulse rounded-full bg-white"
			style="
        left: {star.x}%;
        top: {star.y}%;
        width: {star.size}px;
        height: {star.size}px;
        opacity: {star.opacity};
        animation-delay: {star.delay}s;
      "
		></div>
	{/each}
</div>
