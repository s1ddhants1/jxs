<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { writable } from "svelte/store";
  import { theme } from '$lib/stores/theme.js';

  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
  import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

 
 // Nav Item #1 Audio Toggle function
  let audioElement: HTMLAudioElement;
  let isPlaying = false;
  const audioSource = '/music.mp3';

  onMount(() => {
    audioElement = new Audio(audioSource);
    return () => audioElement.pause(); // Cleanup
  });

  const toggleAudio = () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch(console.error);
    }
    isPlaying = !isPlaying;
  };

 // Nav Item #1 Dark Mode Toggle function
 const toggleTheme = () => {
    theme.update(current => current === 'light' ? 'dark' : 'light');
  };

 // $: isDark = $darkMode === 'dark';

 // Nav Item #3 Menu Toggle function
  let isMenuOpen = writable(false);
  let menuButton: HTMLButtonElement;
  let menuElement: HTMLDivElement;

  function toggleMenu() {
    isMenuOpen.update(value => !value);
  }

  function handleClickOutside(event: MouseEvent) {
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

<header class="flex top-0 justify-between items-center sticky w-full backdrop-blur-md shadow-md p-2 z-50 transition-colors duration-300 dark:text-white">
  <a href="/" class="font-[LondonBetween] text-xl md:text-3xl font-bold pl-3 md:p-6">JxS</a>

  <nav class="relative flex items-center space-x-4 md:space-x-6">

    <button 
    on:click={toggleAudio}
    class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
    {#if !isPlaying}
    <FontAwesomeIcon icon={faPlay} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {:else}
    <FontAwesomeIcon icon={faPause} class="text-neutral-900 dark:text-neutral-100 text-xl md:text-2xl" />
  {/if}  
    </button>

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
      <button on:click={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={$isMenuOpen}
      bind:this={menuButton}
      class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
        <FontAwesomeIcon icon={faBars} class="text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl" />
      </button>

      {#if $isMenuOpen}
        <div
        bind:this={menuElement}
        role="menu" 
        transition:fly={{ y: -10, duration: 200, easing: quintOut }}
        class="absolute right-0 mt-4 w-35 backdrop-blur-xl bg-white/20 dark:bg-neutral-800/20 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 p-2 rounded-xl shadow-lg flex flex-col space-y-2 z-50">
         
        <a href="/"
          role="menuitem" 
          class="hover:text-neutral-600 dark:hover:text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-current opacity-70"></span>
              <span>Home</span>
          </a>

          <div class="border-t border-neutral-200 dark:border-neutral-700 my-1"></div>

          <a href="/valentine" 
          role="menuitem" 
          class="hover:text-neutral-600 dark:hover:text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-current opacity-70"></span>
              <span>Valentine</span>
           </a>
        
       </div>
       {/if}
    </div>
  </nav>
</header>

<style>
  /* Enhanced blur transitions */
  .backdrop-blur-xl {
    transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
  }
  
  /* Menu item animations */
  [role="menuitem"] {
    transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), 
                background-color 0.2s ease;
  }
  
  /* Better focus states for accessibility */
  button:focus-visible, a:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
</style>