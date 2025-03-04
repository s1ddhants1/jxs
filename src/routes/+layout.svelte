<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div>
  <Navbar />
  <div class='min-h-screen flex flex-col overflow-x-hidden content-wrapper h-full overflow-y-scroll position-relative'>
  <slot />
  </div>
</div>
 <Footer />

<style>
</style>