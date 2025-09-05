<script>
	import Hero from '$lib/components/Hero.svelte';
	import Plushies from '$lib/components/Plushies.svelte';
	import Playlist from '$lib/components/Playlist.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Test from '$lib/components/Test.svelte';
</script>

<div class="overflow-hidden">
	<div class="flex flex-grow flex-col">
		<Hero />
		<Plushies />
		<Gallery />
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
