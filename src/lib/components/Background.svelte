<script>
    import Particles from "@tsparticles/svelte";
    import { loadSlim } from "@tsparticles/slim";
    import { onMount } from "svelte";
  
    // Seasonal configurations
    const seasons = [
      {
        name: "winter",
        colors: ["#e0f2fe", "#bfdbfe", "#93c5fd"],
        shapes: ["circle", "star"],
        opacity: 0.3,
        particleCount: 40,
        speed: 1,
        background: "bg-gradient-to-b from-blue-50 to-blue-100"
      },
      {
        name: "spring",
        colors: ["#fce7f3", "#fbcfe8", "#f9a8d4"],
        shapes: ["circle", "triangle"],
        opacity: 0.25,
        particleCount: 50,
        speed: 1.2,
        background: "bg-gradient-to-b from-pink-50 to-green-50"
      },
      {
        name: "summer",
        colors: ["#fef3c7", "#fde68a", "#fcd34d"],
        shapes: ["circle", "polygon"],
        opacity: 0.2,
        particleCount: 35,
        speed: 0.8,
        background: "bg-gradient-to-b from-yellow-50 to-amber-50"
      },
      {
        name: "autumn",
        colors: ["#fed7aa", "#fdba74", "#fb923c"],
        shapes: ["circle", "square"],
        opacity: 0.25,
        particleCount: 45,
        speed: 1,
        background: "bg-gradient-to-b from-orange-50 to-amber-50"
      }
    ];
  
    let currentOptions = {};
    let currentSeasonIndex = 0;
    let currentBackground = seasons[0].background;
    let particlesInitialized = false;
  
    const getSeasonalOptions = (seasonIndex) => {
      const season = seasons[seasonIndex];
      
      return {
        fpsLimit: 60,
        particles: {
          number: {
            value: season.particleCount,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: season.colors
          },
          shape: {
            type: season.shapes,
            options: {
              star: {
                sides: 5
              },
              polygon: {
                sides: 6
              }
            }
          },
          opacity: {
            value: { min: season.opacity * 0.7, max: season.opacity },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          size: {
            value: { min: 1, max: 3 }
          },
          move: {
            enable: true,
            speed: season.speed,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        detectRetina: true
      };
    };
  
    onMount(() => {
      // Initialize with first season
      currentOptions = getSeasonalOptions(0);
      particlesInitialized = true;
  
      // Cycle through seasons
      const interval = setInterval(() => {
        currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
        currentOptions = getSeasonalOptions(currentSeasonIndex);
        currentBackground = seasons[currentSeasonIndex].background;
      }, 10000); // Change every 10 seconds
  
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="absolute inset-0 -z-10 overflow-hidden transition-colors duration-3000 ease-in-out {currentBackground}">
    {#if particlesInitialized}
      <Particles
        id="seasonal-particles"
        options={currentOptions}
        particlesLoaded={async (engine) => {
          await loadSlim(engine);
        }}
      />
    {/if}
    
    <!-- Subtle overlay for better content readability -->
    <div class="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
  </div>