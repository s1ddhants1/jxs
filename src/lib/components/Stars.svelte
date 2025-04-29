<script lang="ts">
// Twinkling stars effect
let twinklingStars = Array(50).fill(0).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.7 + 0.3,
  delay: Math.random() * 5
}));

  import { theme } from '$lib/stores/theme.js';
  import Particles, { particlesInit } from '@tsparticles/svelte';
  import { loadStarsPreset } from '@tsparticles/preset-stars';

// Base Stars Config
let particlesOptions = {
  preset: "stars",
  background: {color: "transparent"},
  size: {value:1},
  move: {enable: false}
};

// Load Engine
void particlesInit(async (engine) => {
  await loadStarsPreset(engine);
});
</script>

{#if $theme === 'dark'}
<div class="particles-container w-full h-full background-transparent">
<Particles
  id="tsparticles"
  options={{ ...particlesOptions, fullScreen: false }}
  init={particlesInit}
/>
</div>
{/if} 

<div class="relative w-full h-screen overflow-hidden">
  <!-- Twinkling background stars -->
  {#each twinklingStars as star, i}
    <div
      class="absolute rounded-full bg-white animate-pulse"
      style="
        left: {star.x}%;
        top: {star.y}%;
        width: {star.size}px;
        height: {star.size}px;
        opacity: {star.opacity};
        animation-delay: {star.delay}s;
      "
    />
  {/each}
</div>