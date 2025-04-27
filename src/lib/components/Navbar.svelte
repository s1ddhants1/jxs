<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { writable } from "svelte/store";
  import { theme } from '$lib/stores/theme.js';

  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPlay, faPause, faMoon, faSun, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

 
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
    theme.update(current => current === 'light' ? 'dark' : 'light');
  };

 // Nav Item #3 Menu Toggle function
  let isMenuOpen = writable(false);
  let menuButton: HTMLButtonElement;
  let menuElement: HTMLDivElement;
  let isMenuIconChanging = false;

  function toggleMenu() {
   isMenuIconChanging = true;
  isMenuOpen.update(value => !value);
  setTimeout(() => {
    isMenuIconChanging = false;
  }, 0);
}

  function handleClickOutside(event: MouseEvent) {
    if (isMenuIconChanging) return;
  if (menuElement && !menuElement.contains(event.target as Node) && 
      menuButton && !menuButton.contains(event.target as Node)) {
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

<section class="sticky z-50 top-0">
<header class="flex justify-between items-center w-full backdrop-blur-md shadow-md p-2 transition-colors duration-300 dark:text-white">
  <a href="/" class="font-[LondonBetween] text-xl md:text-3xl font-bold pl-3 md:p-6">JxS</a>

  <nav class="relative flex items-center space-x-4 md:space-x-6">
  {#if $page.url.pathname === '/valentine'}
    <button 
    on:click={toggleAudio}
    class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
    {#if !isPlaying}
    <FontAwesomeIcon icon={faPlay} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {:else}
    <FontAwesomeIcon icon={faPause} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {/if}  
    </button>
  {/if}

    <button 
    on:click={toggleTheme}
    class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
    {#if $theme === 'light'}
    <FontAwesomeIcon icon={faMoon} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {:else}
    <FontAwesomeIcon icon={faSun} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {/if}
    </button>

    <div class="relative">
      <button 
      on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={$isMenuOpen}
      bind:this={menuButton}
      class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
      {#if $isMenuOpen===false}
      <FontAwesomeIcon icon={faBars} class="text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl" />
       {:else}
      <FontAwesomeIcon icon={faClose} class="text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl" />
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
class="absolute flex flex-col w-screen h-screen p-2 items-center rounded-xl backdrop-blur-md shadow-md text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
 
<a href="/"
  on:click={toggleMenu}
  role="menuitem" 
  class="mt-20 font-bold hover:text-pink-600 dark:hover:text-pink-400">
    <span class="w-2 h-2 rounded-full"></span>
      <span>Home</span>
  </a>

  <a href="/valentine" 
  on:click={toggleMenu}
  role="menuitem" 
  class="mt-4 font-bold hover:text-pink-600 dark:hover:text-pink-400">
    <span class="w-2 h-2 rounded-full"></span>
      <span>Valentine's</span>
   </a>

</div>
{/if}
</section>

<style>
</style>