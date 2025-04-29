<script lang="ts">
    import { theme } from '$lib/stores/theme.js';
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadStarsPreset } from '@tsparticles/preset-stars';

  let particlesOptions = {
    preset: "stars",
    background: {color: "transparent"},
  };

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