<script>
  import { onMount } from 'svelte';

  let sectionVisible = false;
  /**
	 * @type {Element}
	 */
  let sectionRef;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        sectionVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (sectionRef) observer.observe(sectionRef);

    return () => {
      if (sectionRef) observer.unobserve(sectionRef);
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="relative w-full h-screen overflow-hidden"
>
  <!-- Kim slides in from left -->
  <img
    src="/kim.webp"
    alt="Kim"
    class="z-10 scale-50 absolute left-0 h-[70vh] max-h-[500px] object-contain transition-all duration-2000 ease-in-out"
    class:translate-x-0={sectionVisible}
    class:-translate-x-full={!sectionVisible}
  />

<!-- Center content -->
<div class="flex items-center justify-center">
  <p class="text-[40px] font-bold bg-gradient-to-b from-amber-400 via-amber-700 to-amber-950 bg-clip-text text-transparent z-0">
    FUN TIMES!
  </p>
</div>

  <!-- Olaf slides in from right -->
  <img
    src="/olaf.webp"
    alt="Olaf"
    class="z-10 scale-50 absolute right-0 h-[70vh] max-h-[500px] object-contain transition-all duration-2000 ease-in-out"
    class:translate-x-0={sectionVisible}
    class:translate-x-full={!sectionVisible}
  />
</section>
