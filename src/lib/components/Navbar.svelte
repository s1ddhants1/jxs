<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { theme } from '$lib/stores/theme.js';

	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faPlay,
		faPause,
		faMoon,
		faSun,
		faBars,
		faClose,
		faEyeSlash
	} from '@fortawesome/free-solid-svg-icons';

	let showNavbar = true;
	function toggleNavbar() {
		showNavbar = !showNavbar;
	}

	// Nav Item #1 Audio Toggle function
	let audioElement: HTMLAudioElement;
	let isPlaying = false;
	const audioSource = '/music.mp3';

	onMount(() => {
		audioElement = new Audio(audioSource);
		audioElement.loop = true;
		return () => audioElement.play();
	});

	const toggleAudio = () => {
		if (isPlaying) {
			audioElement.pause();
		} else {
			audioElement.play().catch(console.error);
		}
		isPlaying = !isPlaying;
	};

	$: {
		if ($page.url.pathname === '/valentine') {
			if (audioElement && audioElement.paused) {
				audioElement.play();
				isPlaying = true;
			}
		} else {
			if (audioElement) {
				audioElement.pause();
				isPlaying = false;
			}
		}
	}

	// Nav Item #2 Dark Mode Toggle function
	const toggleTheme = () => {
		theme.update((current) => (current === 'light' ? 'dark' : 'light'));
	};

	// Nav Item #3 Menu Toggle function
	let isMenuOpen = writable(false);
	let menuButton: HTMLButtonElement;
	let menuElement: HTMLDivElement;
	let isMenuIconChanging = false;

	function toggleMenu() {
		isMenuIconChanging = true;
		isMenuOpen.update((value) => !value);
		setTimeout(() => {
			isMenuIconChanging = false;
		}, 0);
	}

	function handleClickOutside(event: MouseEvent) {
		if (isMenuIconChanging) return;
		if (
			menuElement &&
			!menuElement.contains(event.target as Node) &&
			menuButton &&
			!menuButton.contains(event.target as Node)
		) {
			isMenuOpen.set(false);
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<section class="sticky top-0 z-50 {`navbar ${!showNavbar ? 'hidden' : ''}`}">
	<header
		class="flex w-full items-center justify-between p-2 shadow-md backdrop-blur-md transition-colors duration-300 dark:text-white"
	>
		<a href="/" class="pl-3 font-[LondonBetween] text-xl font-bold md:p-6 md:text-3xl">JxS</a>

		<nav class="relative flex items-center space-x-4 md:space-x-6">
			{#if $page.url.pathname === '/valentine'}
				<button
					on:click={toggleAudio}
					class="rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
				>
					{#if !isPlaying}
						<FontAwesomeIcon
							icon={faPlay}
							class="text-xl text-neutral-900 md:text-2xl dark:text-neutral-100"
						/>
					{:else}
						<FontAwesomeIcon
							icon={faPause}
							class="text-xl text-neutral-900 md:text-2xl dark:text-neutral-100"
						/>
					{/if}
				</button>
			{/if}

			<button
				on:click={toggleTheme}
				class="rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
			>
				{#if $theme === 'light'}
					<FontAwesomeIcon
						icon={faMoon}
						class="text-xl text-neutral-900 md:text-2xl dark:text-neutral-100"
					/>
				{:else}
					<FontAwesomeIcon
						icon={faSun}
						class="text-xl text-neutral-900 md:text-2xl dark:text-neutral-100"
					/>
				{/if}
			</button>

			<div class="relative">
				<button
					on:click={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={$isMenuOpen}
					bind:this={menuButton}
					class="rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
				>
					{#if $isMenuOpen === false}
						<FontAwesomeIcon
							icon={faBars}
							class="text-2xl text-neutral-900 md:text-3xl dark:text-neutral-100"
						/>
					{:else}
						<FontAwesomeIcon
							icon={faClose}
							class="text-2xl text-neutral-900 md:text-3xl dark:text-neutral-100"
						/>
					{/if}
				</button>
			</div>
		</nav>
	</header>

	{#if $isMenuOpen}
		<div
			bind:this={menuElement}
			role="menu"
			transition:fly={{ y: -10, duration: 200, easing: quintOut }}
			class="absolute flex h-screen w-screen flex-col items-center rounded-xl border border-neutral-200 p-2 text-neutral-900 shadow-md backdrop-blur-md dark:border-neutral-700 dark:text-neutral-100"
		>
			<a
				href="/"
				on:click={toggleMenu}
				role="menuitem"
				class="mt-20 font-bold hover:text-pink-600 dark:hover:text-pink-400"
			>
				<span class="h-2 w-2 rounded-full"></span>
				<span>Home</span>
			</a>

			<a
				href="/valentine"
				on:click={toggleMenu}
				role="menuitem"
				class="mt-4 font-bold hover:text-pink-600 dark:hover:text-pink-400"
			>
				<span class="h-2 w-2 rounded-full"></span>
				<span>Valentine's</span>
			</a>

			<button
				on:click={toggleNavbar}
				aria-label="Toggle Navbar"
				role="menuitem"
				class="mt-6 font-bold hover:text-pink-600 dark:hover:text-pink-400"
			>
				<FontAwesomeIcon
					icon={faEyeSlash}
					class="text-xl text-neutral-900 md:text-2xl dark:text-neutral-100"
				></FontAwesomeIcon>
			</button>
		</div>
	{/if}
</section>

<style>
</style>
