<script lang="ts">
  import { theme } from '../lib/stores/theme.js';
  
  // Initialize theme
  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
  }

  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-gradient-to-br from-pink-200 to-cyan-200 text-gray-800 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-500">
  <Navbar />
  <div class='min-h-screen flex flex-col overflow-x-hidden content-wrapper h-full overflow-y-scroll relative'>
  <slot />
  </div>
 <Footer />
</div>
<style>
</style>