<script lang="ts">
let twinklingStars = Array(50).fill(0).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.7 + 0.3,
  delay: Math.random() * 5
}));
</script>

<div class="relative w-full h-screen overflow-hidden">
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