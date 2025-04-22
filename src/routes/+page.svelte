<script>
	import Hero from "$lib/components/Hero.svelte";
	import Wl from "$lib/components/wl.svelte";
	import Playlist from "$lib/components/Playlist.svelte";
  </script>

  <div class="overflow-hidden">
	<div class="flex flex-grow flex-col">
	  <Hero />
	  <Wl />
	  <Playlist />
	</div>
  </div>

  <svelte:head>
	<title>JxS</title>
	<meta name="description" content="a website." />
	<meta property="og:description" content="og description" />
	<meta property="og:title" content="ogtitle" />
  </svelte:head>
  