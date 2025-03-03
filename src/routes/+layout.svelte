<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Playlist from "$lib/components/playlist.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />

<main class="min-h-screen flex flex-col">
  <slot />
</main>

<Playlist />

<Footer />