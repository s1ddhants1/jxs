<script>
	import Hero from "$lib/components/Hero.svelte";
	import About from "$lib/components/About.svelte";
	import Playlist from "$lib/components/Playlist.svelte";
    import Test from "$lib/components/Test.svelte";
  </script>

  <div class="overflow-hidden">
	<div class="flex flex-grow flex-col">
	  <Hero />
	  <About />
	  <Playlist />
	  <Test />
	</div>
  </div>

  <svelte:head>
	<title>JxS</title>
	<meta name="description" content="a website." />
	<meta property="og:description" content="og description" />
	<meta property="og:title" content="ogtitle" />
  </svelte:head>
  