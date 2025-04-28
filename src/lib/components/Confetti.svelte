<script>
	let characters = ['💕', '🩷', '💖', '💗', '💓', '💘', '💝', '💞', '🌸'];
	let emojiCount = 60; // Reduced count for less clutter

	let confetti = $state(new Array(emojiCount).fill().map((_, i) => {
		return {
			character: characters[i % characters.length],
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: 0.5 + Math.random() * 1.5,
			speedX: -0.05 + Math.random() * 0.1,
			speedY: -0.02 + Math.random() * 0.04,
			rotation: Math.random() * 360,
			rotationSpeed: -0.5 + Math.random() * 1,
			opacity: 0.6 + Math.random() * 0.4,
			life: 10000 + Math.random() * 10000, // Lifetime in ms
			born: Date.now() - Math.random() * 5000 // Stagger birth times
		};
	}));

	$effect(() => {
		let frame = requestAnimationFrame(function loop() {
			frame = requestAnimationFrame(loop);
			const now = Date.now();

			for (const confetto of confetti) {
				// Update position and rotation
				confetto.x += confetto.speedX;
				confetto.y += confetto.speedY;
				confetto.rotation += confetto.rotationSpeed;

				// Fade out near edges
				const edgeMargin = 10;
				const distFromEdgeX = Math.min(confetto.x, 100 - confetto.x);
				const distFromEdgeY = Math.min(confetto.y, 100 - confetto.y);
				const edgeFactor = Math.min(distFromEdgeX, distFromEdgeY) / edgeMargin;
				
				confetto.edgeOpacity = Math.min(1, edgeFactor);

				// Recycle emojis that have lived too long or left the view
				if ((now - confetto.born > confetto.life) || 
					(confetto.x < -10 || confetto.x > 110 || confetto.y < -10 || confetto.y > 110)) {
					confetto.x = Math.random() * 80 + 10; // Start in central area
					confetto.y = Math.random() * 80 + 10;
					confetto.born = now;
				}
			}
		});

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="romantic-container">
	{#each confetti as c}
		<span
			style="left: {c.x}%; top: {c.y}%; 
				   transform: scale({c.size}) rotate({c.rotation}deg);
				   opacity: {c.opacity * c.edgeOpacity};
				   font-size: {3 + c.size}vw;"
		>
			{c.character}
		</span>
	{/each}
</div>

<style>
	.romantic-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: linear-gradient(to bottom, #fff5f9, #ffe6f2);
		z-index: -1;
	}

	span {
		position: absolute;
		user-select: none;
		will-change: transform;
		transition: 
			transform 0.8s cubic-bezier(0.2, 0, 0.2, 1),
			opacity 1.2s ease;
		pointer-events: none;
		filter: drop-shadow(0 2px 4px rgba(255, 105, 180, 0.2));
	}

	:global(body) {
		margin: 0;
		overflow: auto; /* Restore scroll if needed */
	}
</style>