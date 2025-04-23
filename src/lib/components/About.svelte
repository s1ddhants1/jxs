<script>
   // State for touch/hover interactions
   let kimPeeking = false;
   let olafPeeking = false;
 </script>
 
 <div class="relative h-screen overflow-hidden touch-none">
   <!-- Mr. Kim (left) -->
   <div 
     class="absolute z-10 left-0 top-1/2 -translate-y-1/2"
     role="img"
     on:click={() => kimPeeking = !kimPeeking}
     on:mouseenter={() => kimPeeking = true}
     on:mouseleave={() => kimPeeking = false}
    >

     <img 
       src="/kim.webp" 
       alt="Mr. Kim"
       class="h-40 md:h-64 -translate-x-[36%] transition-transform duration-300
              {kimPeeking ? 'translate-x-0' : ''}
              hover:translate-x-0" 
     />
   </div>
 
   <!-- Center content -->
   <div class="z-0 h-screen w-full flex items-center justify-center text-white">
     <p class="text-4xl font-serif backdrop-blur-sm px-6 py-3 rounded-lg">
       Fun Times
     </p>
   </div>
 
   <!-- Olaf (right) -->
   <div 
     class="absolute z-10 right-0 top-1/2 -translate-y-1/2"
     role="img"
     on:click={() => olafPeeking = !olafPeeking}
     on:mouseenter={() => olafPeeking = true}
     on:mouseleave={() => olafPeeking = false}
   >
     <img 
       src="/olaf.webp" 
       alt="Olaf"
       class="h-40 md:h-64 translate-x-[20%] transition-transform duration-300
              {olafPeeking ? 'translate-x-0' : ''}
              hover:translate-x-0"  
       />
   </div>
 </div>
 
 <style>
 </style>