<script lang="ts">
    let currentPlaylist = "5y3UShsEvgcXVlHyfcVfSe";
    let playlistTheme = "0"; // 0 for dark, 1 for light
  </script>
  
  <div class="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-rose-900 via-black to-rose-900">
   
        <p class="text-[50px] font-bold bg-gradient-to-b from-rose-700 via-rose-900 to-rose-950 bg-clip-text text-transparent z-0">
            PLAYLIST
        </p>
        <p class="text-5l bg-gradient-to-b from-rose-800 via-rose-850 to-rose-950 bg-clip-text text-transparent">
            Songs that make me think of Nini! 
        </p>

    <div class="mt-10 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
      <iframe
        title="Spotify Playlist"
        src={`https://open.spotify.com/embed/playlist/${currentPlaylist}?utm_source=generator&theme=${playlistTheme}`}
        class="w-full h-[352px] md:h-[400px] border-0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  
    <div class="mt-8 flex gap-4">
      <button class="px-4 py-2 rounded-lg bg-rose-900 hover:bg-rose-600 text-white transition-colors">
        Save Playlist
      </button>
      <button class="px-4 py-2 rounded-lg bg-transparent border border-rose-800 hover:bg-rose-900/50 text-rose-100 transition-colors">
        Share
      </button>
    </div>
  </div>
  
  <style>

    div {
      background-size: 200% 200%;
      animation: gradient 12s ease infinite;
    }
  
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  </style>