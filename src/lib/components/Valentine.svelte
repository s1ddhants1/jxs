<script>
   import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
   import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

  import { onMount } from 'svelte';
  let video;
  let audio = document.getElementById("background-music");
  let isPlaying = false;

  onMount(() => {
    audio = document.getElementById('background-music');
  });

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  }
</script>

<video bind:this={video} autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
  <source src="../assets/bg.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<audio bind:this={audio} loop class="hidden">
  <source src="../assets/music.mp3" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>


  <button on:click={toggleAudio} class="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} class="text-neutral-900 dark:text-neutral-100 text-xl" />
  </button>

  <div class="w-full dark:text-gray"> 
    <div class="typing-animation">
      <p id="line1" class="text-base mt-2 text-gray-800 dark:text-gray-300">&nbsp;heyy nini!!</p>
      <p id="line2">&nbsp;Would you like to...</p>
      <p id="line3" class="text-6xl leading-20 bg-gradient-to-r from-pink-700 via-pink-500 to-pink bg-clip-text text-transparent font-bold">Be My Valentine?</p>
      <p id="line4">&nbsp;...please?</p>
      <p id="line5">&nbsp;I love you </p>
    </div>
  </div>