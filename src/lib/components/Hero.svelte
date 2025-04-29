<script>
  import { theme } from '$lib/stores/theme.js';
  import Stars from '$lib/components/Stars.svelte';
</script>

<section class="relative w-full min-h-screen overflow-hidden"> 

{#if $theme === 'dark'}
  <div class="absolute top-0 left-0 w-full h-2/5 bg-opacity-30 overflow-hidden">
       <Stars />
  </div>

<!-- Moon -->
<div class="absolute top-10 right-10 w-16 h-16 rounded-full bg-yellow-100 shadow-lg shadow-yellow-100/30">
  <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-indigo-900/20" />
</div>
{/if}
  

  <div class="intro pt-30 md:pt-30 text-center">
    <h2 class="font-[LondonBetween] font-bold text-4xl md:text-6xl text-gray-800 dark:text-gray-300">
      <span class="block md:inline">Jenny</span>
      <span class="block md:inline">&</span>
      <span class="block md:inline">Siddhant</span>
    </h2>
    <h3 class="relative font-[LondonBetween] text-6xl md:text-7xl md:mt-5 leading-20 bg-gradient-to-r from-pink-700 via-pink-500 to-pink bg-clip-text text-transparent font-bold">
      Forever<br>
      <span class="inline-block md:mt-2">❤️</span>
    </h3>
    <h4 class="font-[LondonBetween] text-base md:text-2xl mt-8 text-gray-800 dark:text-gray-300">
      A little place on the internet to celebrate us!
    </h4>

<!-- bouncy ballz -->
<div class="mt-10 flex justify-center space-x-8 pt-6 opacity-80">
  <div class="w-8 h-8 rounded-full bg-pink-500 dark:bg-pink-500 animate-bounce" style="animation-delay: 0.1s"></div>
  <div class="w-8 h-8 rounded-full bg-cyan-500 dark:bg-cyan-500 animate-bounce" style="animation-delay: 0.3s"></div>
  <div class="w-8 h-8 rounded-full bg-pink-500 dark:bg-pink-500 animate-bounce" style="animation-delay: 0.5s"></div>
 </div>
</div>
</section>

<style>
  @keyframes heartbeat {
    0% { transform: scale(1); }
    25% { transform: scale(1.1); }
    40% { transform: scale(1); }
    55% { transform: scale(1.2); }
    70% { transform: scale(1); }
    100% { transform: scale(1); }
  }
  .animate-heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
    will-change: transform;
  }
</style>
