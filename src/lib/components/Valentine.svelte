<script>
  import { onMount } from 'svelte';
  import Confetti from './Confetti.svelte';

let lines;
let delay = 0;

onMount(() => {
  lines = document.querySelectorAll('.typing-animation p');
  lines.forEach((line) => {
    setTimeout(() => {
      // @ts-ignore
      line.style.width = line.scrollWidth + 'px';
      // @ts-ignore
      line.style.opacity = 1;
      setTimeout(() => {
        // @ts-ignore
        line.style.borderRight = 'none';
      }, 2000);
    }, delay);
    delay += 2500;
  });
});
</script>

<section class="w-full h-screen overflow-hidden">
<div class="h-screen fixed inset-0 z-10 overflow-hidden">
  <Confetti />
</div>

<div class="font-[LondonBetween] font-bold text-nowrap flex fixed p-40 z-20 w-full items-center justify-center"> 
  <div class="typing-animation">
    <p class="text-xl md:text-3xl mt-1 text-white dark:text-white">heyy nini!!</p>
    <p class="text-xl md:text-3xl mt-1 text-white dark:text-white">would you like to...</p>
    <p class="text-4xl md:text-6xl leading-15 bg-gradient-to-r from-pink-700 via-pink-500 to-pink-200 bg-clip-text text-transparent font-bold">
      Be My Valentine?
    </p>
    <p class="text-xl md:text-3xl mt-1 text-white dark:text-white">...please?</p>
    <p class="text-xl md:text-3xl mt-1 text-white dark:text-white">I love you &lt;3</p>
  </div>
</div>
</section>

<style>
  .typing-animation p {
    display: block;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: .10em solid white;
    width: 0;
    margin: 0;
    margin: 0.5rem 0;
    transition: width 2s ease, opacity 1s ease;
  }
</style>