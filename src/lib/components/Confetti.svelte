<script>
	let characters = ['💕', '🩷', '💗', '💓', '💘', '💞'];
	let emojiCount = 45; // Optimal number for performance

	// Smooth animation state
	let lastTime = $state(0);
	let confetti = $state(
		new Array(emojiCount).fill().map((_, i) => {
			const scale = 0.7 + Math.random() * 1.3;
			return {
				id: i,
				character: characters[i % characters.length],
				x: Math.random() * 80 + 10,
				y: Math.random() * 80 + 10,
				targetX: 0,
				targetY: 0,
				size: scale,
				speedX: (-0.03 + Math.random() * 0.06) * (0.5 + scale / 2),
				speedY: (-0.02 + Math.random() * 0.04) * (0.5 + scale / 2),
				rotation: Math.random() * 360,
				rotationSpeed: -0.2 + Math.random() * 0.4,
				opacity: 0.7 + Math.random() * 0.3,
				lifeProgress: Math.random(),
				state: 'active',
				spring: {
					x: { value: 0, velocity: 0 },
					y: { value: 0, velocity: 0 },
					opacity: { value: 1, velocity: 0 }
				}
			};
		})
	);

	// Smooth spring physics
	const spring = (current, target, velocity, damping = 0.5, stiffness = 0.2) => {
		const delta = target - current;
		const acceleration = stiffness * delta - damping * velocity;
		return {
			value: current + velocity + acceleration,
			velocity: velocity + acceleration
		};
	};

	$effect(() => {
		let frame = requestAnimationFrame(function loop(time) {
			frame = requestAnimationFrame(loop);
			const deltaTime = Math.min(50, time - lastTime); // Cap at 50ms
			lastTime = time;
			const cycleDuration = 40000; // Longer cycle for slower changes

			for (const confetto of confetti) {
				// Update lifecycle
				confetto.lifeProgress = (confetto.lifeProgress + deltaTime / cycleDuration) % 1;

				// State transitions
				if (confetto.state === 'fading-in') {
					confetto.spring.opacity = spring(
						confetto.spring.opacity.value,
						1,
						confetto.spring.opacity.velocity,
						0.7,
						0.3
					);
					if (confetto.spring.opacity.value > 0.99) confetto.state = 'active';
				} else if (confetto.lifeProgress > 0.92) {
					confetto.state = 'fading-out';
				} else if (confetto.state === 'fading-out') {
					confetto.spring.opacity = spring(
						confetto.spring.opacity.value,
						0,
						confetto.spring.opacity.velocity,
						0.7,
						0.3
					);
					if (confetto.spring.opacity.value < 0.01) {
						// Recycle with new properties
						confetto.x = Math.random() * 80 + 10;
						confetto.y = Math.random() * 80 + 10;
						confetto.speedX = (-0.03 + Math.random() * 0.06) * (0.5 + confetto.size / 2);
						confetto.speedY = (-0.02 + Math.random() * 0.04) * (0.5 + confetto.size / 2);
						confetto.lifeProgress = 0;
						confetto.state = 'fading-in';
						confetto.spring.opacity.value = 0;
					}
				}

				// Update active emojis with smooth physics
				if (confetto.state !== 'fading-out') {
					confetto.targetX = confetto.x + confetto.speedX * deltaTime;
					confetto.targetY = confetto.y + confetto.speedY * deltaTime;

					confetto.spring.x = spring(
						confetto.spring.x.value,
						confetto.targetX - confetto.x,
						confetto.spring.x.velocity,
						0.5,
						0.1
					);

					confetto.spring.y = spring(
						confetto.spring.y.value,
						confetto.targetY - confetto.y,
						confetto.spring.y.velocity,
						0.5,
						0.1
					);

					confetto.x += confetto.spring.x.value;
					confetto.y += confetto.spring.y.value;
					confetto.rotation += confetto.rotationSpeed * (deltaTime / 16);
				}

				// Calculate edge fading with smooth curve
				const edgeMargin = 0;
				const distFromEdgeX = Math.min(confetto.x, 100 - confetto.x);
				const distFromEdgeY = Math.min(confetto.y, 100 - confetto.y);
				confetto.edgeFactor = Math.min(1, Math.min(distFromEdgeX, distFromEdgeY) / edgeMargin);
			}
		});

		return () => cancelAnimationFrame(frame);
	});
</script>

<div class="romantic-atmosphere">
	{#each confetti as c}
		<span
			class="emoji"
			class:fade-in={c.state === 'fading-in'}
			class:fade-out={c.state === 'fading-out'}
			style="--x: {c.x}%; --y: {c.y}%; 
				   transform: 
					   translate(calc(var(--x) - 50%), calc(var(--y) - 50%))
					   scale({c.size}) 
					   rotate({c.rotation}deg);
				   opacity: {c.opacity * c.edgeFactor * c.spring.opacity.value};
				   font-size: {2 + c.size * 2}vw;"
		>
			{c.character}
		</span>
	{/each}
</div>

<style>
	.romantic-atmosphere {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;

		z-index: -1;
	}

	.emoji {
		position: absolute;
		top: 50%;
		left: 50%;
		user-select: none;
		will-change: transform, opacity;
		pointer-events: none;
		filter: drop-shadow(0 1px 2px rgba(255, 105, 180, 0.1))
			drop-shadow(0 2px 4px rgba(255, 105, 180, 0.05));
		transform-origin: center;
		transition: none; /* We handle all animation in JS */
	}

	.fade-in {
		opacity: 0;
	}

	.fade-out {
		opacity: 0;
	}

	:global(body) {
		margin: 0;
		overscroll-behavior: none;
	}
</style>
