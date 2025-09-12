<script>
	const characters = ['💕', '🩷', '💗', '💓', '💘', '💞'];
	const emojiCount = 50;
	let confetti = $state(
		Array.from({ length: emojiCount }, (_, i) => ({
			id: i,
			character: characters[i % characters.length],
			x: 50,
			y: 50,
			size: 0.6 + Math.random() * 1.2,
			opacity: 0.7 + Math.random() * 0.3,
			speedX: -0.05 + Math.random() * 0.1,
			speedY: -0.05 + Math.random() * 0.1,
			rotation: Math.random() * 360,
			rotationSpeed: -0.2 + Math.random() * 0.4
		}))
	);

	let lastTime = 0;

	$effect(() => {
		let frame;
		function animate(time) {
			const delta = Math.min(50, time - lastTime);
			lastTime = time;

			for (const c of confetti) {
				c.x += c.speedX * delta;
				c.y += c.speedY * delta;
				c.rotation += c.rotationSpeed * (delta / 16);

				if (c.x < -10 || c.x > 110 || c.y < -10 || c.y > 110) {
					confetti[i] = makeConfetto(c.id);
				}
			}

			frame = requestAnimationFrame(animate);
		}

		frame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="romantic-atmosphere">
	{#each confetti as c (c.id)}
		<span
			class="emoji"
			style="
				top: {c.y}%;
				left: {c.x}%;
				transform:
					scale({c.size})
					rotate({c.rotation}deg);
				opacity: {c.opacity};
				font-size: {2 + c.size * 2}vw;"
		>
			{c.character}
		</span>
	{/each}
</div>

<style>
	.romantic-atmosphere {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
	}

	.emoji {
		position: absolute;
		user-select: none;
		pointer-events: none;
		will-change: transform, opacity, top, left;
		filter: drop-shadow(0 2px 4px rgba(255, 105, 180, 0.15));
		transform-origin: center;
	}
</style>
