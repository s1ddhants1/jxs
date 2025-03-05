import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // SvelteKit check for browser

const defaultTheme = 'light';

// Initialize theme only on the client
let initialTheme = defaultTheme;
if (browser) {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
}

export const darkMode = writable(initialTheme);

// Ensure changes apply only in the browser
if (browser) {
  darkMode.subscribe((value) => {
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  });
}