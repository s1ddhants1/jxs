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

	const ariesConstellation = {
		name: 'Aries',
		stars: [
			{ x: 473.7, y: 354.7, r: 4.7 },
			{ x: 708.1, y: 443.6, r: 6.6 },
			{ x: 780.9, y: 503.2, r: 4.7 },
			{ x: 789.8, y: 538.3, r: 4.7 }
		],
		polyline: [
			[473.7, 354.7],
			[708.1, 443.6],
			[780.9, 503.2],
			[789.8, 538.3]
		]
	};

	const capricornusConstellation = {
		name: 'Capricornus',
		stars: [
			{ x: 812.5, y: 372.2, r: 4.3 },
			{ x: 791.2, y: 426.1, r: 4.3 },
			{ x: 737, y: 513.9, r: 4.3 },
			{ x: 638.6, y: 670.2, r: 4.3 },
			{ x: 416.4, y: 603.7, r: 4.3 },
			{ x: 531.5, y: 477.3, r: 4.3 },
			{ x: 522.5, y: 663.8, r: 4.3 },
			{ x: 334.9, y: 468.3, r: 4.3 },
			{ x: 293.1, y: 459, r: 7.8 },
			{ x: 607, y: 710.7, r: 4.3 }
		],
		polygon: [
			[293.1, 459],
			[416.4, 603.7],
			[522.5, 663.8],
			[607, 710.7],
			[638.6, 670.2],
			[737, 513.9],
			[791.2, 426.1],
			[812.5, 372.2],
			[531.5, 477.3],
			[334.9, 468.3]
		]
	};
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

<svg viewBox="0 0 1080 1080" class="pointer-events-none absolute inset-0 h-full w-full">
	<g transform="translate(-400, 250)">
		<polyline
			points={ariesConstellation.polyline.map(([x, y]) => `${x},${y}`).join(' ')}
			stroke="white"
			stroke-width="0.1"
			fill="none"
			class=""
			style="filter: drop-shadow(0 0 6px #fff5);"
		/>

		{#each ariesConstellation.stars as star (star.x + ',' + star.y)}
			<circle
				cx={star.x}
				cy={star.y}
				r={star.r}
				fill="white"
				class="animate-pulse"
				style="opacity: 0.85; animation-delay: {Math.random() * 3}s;"
			/>
		{/each}
	</g></svg
>

<svg viewBox="0 0 1080 1080" class="pointer-events-none absolute inset-0 h-full w-full">
	<g transform="translate(200, 100)">
		<polygon
			points={capricornusConstellation.polygon.map(([x, y]) => `${x},${y}`).join(' ')}
			stroke="white"
			stroke-width="0.1"
			fill="none"
			class=""
			style="filter: drop-shadow(0 0 6px #fff5);"
		/>

		{#each capricornusConstellation.stars as star (star.x + '-' + star.y)}
			<circle
				cx={star.x}
				cy={star.y}
				r={star.r}
				fill="white"
				class="animate-pulse"
				style="opacity: 0.85; animation-delay: {Math.random() * 3}s;"
			/>
		{/each}
	</g></svg
>
