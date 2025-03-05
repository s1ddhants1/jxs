import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Check if running in the browser (prevents SSR errors)
const storedTheme = browser ? localStorage.getItem('theme') : null;
const prefersDark = browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

// Writable store for theme
export const isDark = writable(storedTheme === 'dark' || (!storedTheme && prefersDark));

export function toggleDarkMode() {
  isDark.update((dark) => {
    const newDark = !dark;
    if (browser) {
      document.documentElement.classList.toggle('dark', newDark);
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
    }
    return newDark;
  });
}
