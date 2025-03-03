<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Playlist from "$lib/components/playlist.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-gradient-to-br from-pink-100 to-cyan-100 text-gray-800 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900">
<Navbar />

 <div class='min-h-screen flex flex-col overflow-x-hidden content-wrapper h-full overflow-y-scroll position-relative'>
  <slot />
 </div>
</div>

<Playlist />

<Footer />

<style>
  .h-full {
    min-height: 100vh;
  }
</style>