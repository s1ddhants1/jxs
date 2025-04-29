<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadStarsPreset } from '@tsparticles/preset-stars';

  let particlesOptions = {
    preset: "stars",
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      move: {
        enable: false,
        speed: 0.5
      }
    }
  };

  void particlesInit(async (engine) => {
    await loadStarsPreset(engine);
  });
</script>

<div class="particles-container background-transparent">
  <Particles
    id="tsparticles"
    options={particlesOptions}
    init={particlesInit}
  />
</div>
