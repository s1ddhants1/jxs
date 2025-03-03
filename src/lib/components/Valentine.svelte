<script>
  import { onMount } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

  let isPlaying = false;
  let lines = [];
  let delay = 0;

  onMount(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = "1";
        line.style.width = line.scrollWidth + "px";

        setTimeout(() => {
          line.style.borderRight = "none"; // Remove cursor effect after typing
        }, 2000);
      }, delay);

      delay += 2500;
    });
  });
</script>

<!-- Background Video -->
<video id="background-video" autoplay loop muted class="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1]">
  <source src="/bg.mp4" type="video/mp4" />
</video>

<!-- Main Container -->
<div class="container flex flex-col justify-center items-center h-screen text-center text-white font-[LondonBetween]">
  
  <div class="typing-animation flex flex-col space-y-2">
    {#each ["Hello, world!", "Welcome to Svelte.", "Enjoy coding!"] as text, i}
      <p
        bind:this={lines[i]}
        class="opacity-0 overflow-hidden whitespace-nowrap border-r-2 border-white w-0 
               transition-all duration-2000 ease-in-out text-[clamp(1.2rem,1.5vw,2rem)] my-2"
      >
        {text}
      </p>
    {/each}

    <!-- Special Line with Gradient -->
    <p
      id="line3"
      bind:this={lines[3]}
      class="opacity-0 overflow-hidden whitespace-nowrap w-0 font-bold
             bg-gradient-to-r from-[#B2005A] via-[#D80073] to-[#FF66A3]
             bg-clip-text text-transparent text-[clamp(2.5rem,3.5vw,4rem)]"
    >
      Dynamic Gradient Text
    </p>
  </div>
</div>


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