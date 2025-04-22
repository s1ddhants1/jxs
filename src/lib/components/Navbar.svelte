<script lang="ts">
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
  import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";

  import { writable } from "svelte/store";
  import { darkMode } from '../stores/theme.js';

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
  function toggleDarkMode() {
    darkMode.update(mode => (mode === 'dark' ? 'light' : 'dark'));
  }

  $: isDark = $darkMode === 'dark';

 // Nav Item #3 Menu Toggle function
  let isMenuOpen = writable(false);

  function toggleMenu() {
    isMenuOpen.update(value => !value);
  }

</script>

<header class="flex justify-between items-center sticky top-0 w-full backdrop-blur-md shadow-md p-2 z-10 transition-colors duration-300 dark:text-white">
  <a href="/" class="font-[LondonBetween] text-xl font-bold pl-3">JxS</a>

  <nav class="relative flex items-center space-x-4">

    <button 
    on:click={toggleAudio}
    class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} class="text-neutral-900 dark:text-neutral-100 text-xl" />
    </button>

    <button 
    on:click={toggleDarkMode}
    class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} class="text-neutral-900 dark:text-neutral-100 text-xl" />
    </button>

    <div class="relative">
      <button on:click={toggleMenu}
      class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
        <FontAwesomeIcon icon={faBars} class="text-neutral-900 dark:text-neutral-100 text-2xl" />
      </button>

      {#if $isMenuOpen}
        <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 p-2 rounded-md shadow-md flex flex-col space-y-2 z-50">
          <a href="/" class="hover:text-neutral-600 dark:hover:text-neutral-300">Home</a>
          <a href="/valentine" class="hover:text-neutral-600 dark:hover:text-neutral-300">Valentine</a>
        </div>
      {/if}
    </div>
  </nav>
</header>
