<script lang="ts">
	import { theme } from '../lib/stores/theme.js';
	import showNavbar from '$lib/components/Navbar.svelte';

	// Initialize theme
	$: if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', $theme === 'dark');
	}

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div
	class="bg-gradient-to-br from-pink-100 to-rose-100 transition-colors duration-500 dark:bg-gradient-to-br dark:from-black dark:to-neutral-800"
>
	<Navbar />
	<div class="content-wrapper relative flex h-full min-h-screen flex-col overflow-x-hidden">
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
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
