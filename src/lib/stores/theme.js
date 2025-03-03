import { writable } from 'svelte/store';

export const darkMode = writable(false);

if (typeof localStorage !== 'undefined') {
  darkMode.set(localStorage.getItem('theme') === 'dark');
}

darkMode.subscribe(value => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value ? 'dark' : 'light');
  }
});
