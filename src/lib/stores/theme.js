import { writable } from 'svelte/store';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const theme = writable(getInitialTheme());

theme.subscribe(value => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', value);
  document.documentElement.classList.toggle('dark', value === 'dark');
});