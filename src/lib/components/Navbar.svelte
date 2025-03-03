<script>
  import { onMount } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
  import { writable } from "svelte/store";
  import { darkMode } from '../stores/theme.js';

  let isMenuOpen = writable(false);
  let isDark = false;

  $: isDark = $darkMode === 'dark';

  const toggleMenu = () => {
    isMenuOpen.update(value => !value);
  };

function toggleDarkMode() {
  darkMode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
}

</script>

<header class="flex justify-between items-center sticky top-0 w-full backdrop-blur-md shadow-md p-2 z-10 transition-colors duration-300 dark:text-white">
  <a href="/" class="text-xl font-bold pl-3">JxS</a>

  <nav class="relative flex items-center space-x-4">
    <!-- Dark mode toggle -->
    <button on:click={toggleDarkMode} class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} class="text-neutral-900 dark:text-neutral-100 text-xl" />
    </button>

    <!-- Menu container -->
    <div class="relative">
      <button on:click={toggleMenu} class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
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
