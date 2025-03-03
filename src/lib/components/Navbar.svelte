<script>
  import { onMount } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
  import { writable } from "svelte/store";

  import { darkMode } from '$lib/stores/theme.js';

function toggleDarkMode() {
  darkMode.update(mode => !mode);
}

  let isDark = false;
  let isMenuOpen = writable(false);

onMount(() => {
    isDark = localStorage.getItem('theme') === 'dark';
    updateTheme();
  });

  function updateTheme() {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }


  const toggleMenu = () => {
    isMenuOpen.update(value => !value);
  };
</script>

<header class="flex justify-between items-center sticky top-0 w-full bg-white/50 backdrop-blur-md shadow-md p-2 z-10 transition-colors duration-300 dark:bg-gray-900/50 dark:text-white">
  <div class="text-xl font-bold">JxS</div>

  <nav class="relative flex items-center space-x-4">
    <!-- Dark mode toggle -->
    <button on:click={toggleDarkMode} class="p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} class="text-gray-900 dark:text-gray-100 text-xl" />
    </button>

    <!-- Menu container -->
    <div class="relative">
      <button on:click={toggleMenu} class="p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
        <FontAwesomeIcon icon={faBars} class="text-gray-900 dark:text-gray-100 text-2xl" />
      </button>

      {#if $isMenuOpen}
        <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded-md shadow-md flex flex-col space-y-2 z-50">
          <a href="https://jxs.pages.dev" class="hover:text-gray-600 dark:hover:text-gray-300">Home</a>
          <a href="https://jxs.pages.dev/pages/valentine.html" class="hover:text-gray-600 dark:hover:text-gray-300">Valentine</a>
        </div>
      {/if}
    </div>
  </nav>
</header>
