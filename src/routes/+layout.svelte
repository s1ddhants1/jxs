<script lang="ts">
  import SeasonalBackground from "$lib/components/Background.svelte";
  import { theme } from '../lib/stores/theme.js';
  
  // Initialize theme
  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
  }

  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-gradient-to-br from-yellow-100 via-white to-amber-100 dark:bg-gradient-to-br dark:from-black dark:to-neutral-800 transition-colors duration-500">

<Navbar />
  <div class='min-h-screen flex flex-col overflow-x-hidden content-wrapper h-full relative'>
  <slot />
  </div>
<Footer />
</div>

<style>
  div {
    background-size: 200% 200%;
    animation: gradient 12s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>