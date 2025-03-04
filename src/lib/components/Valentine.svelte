<script>
  import { onMount } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

  let isPlaying = false;
  let lines = [];
  let delay = 0;
  let audio = new Audio("/music.mp3");

  function toggleAudio() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }
</script>

<div class="fixed inset-0 -z-10 overflow-hidden">
  <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted playsinline>
    <source src="/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<button on:click={toggleAudio} class="mt-auto p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} class="text-neutral-900 dark:text-neutral-100 text-xl" />
</button>

<div class="w-full mt-50 dark:text-white text-center"> 
  <div class="typing-animation">
    <p class="text-3xl mt-2 text-white-800 dark:text-white-300">heyy nini!!</p>
    <p class="text-3xl mt-2 text-white-800 dark:text-white-300">Would you like to...</p>
    <p class="text-6xl leading-20 bg-gradient-to-r from-pink-700 via-pink-500 to-pink bg-clip-text text-transparent font-bold">
      Be My Valentine?
    </p>
    <p class="text-3xl mt-2 text-white-800 dark:text-white-300">...please?</p>
    <p class="text-3xl mt-2 text-white-800 dark:text-white-300">I love you</p>
  </div>
</div>
