<script lang="ts">
	let currentPlaylist = '5y3UShsEvgcXVlHyfcVfSe';
	let playlistTheme = '0'; // 0 for dark, 1 for light

	// Button states
	let saveButtonText = 'Save Playlist';
	let shareButtonText = 'Share';
	let isCopied = false;

	// Save to localStorage (TBD)
	const savePlaylist = null;
	saveButtonText = 'Save';

	// Share with Web Share API or fallback
	const sharePlaylist = async () => {
		const playlistUrl = `https://open.spotify.com/playlist/${currentPlaylist}`;

		try {
			if (navigator.share) {
				await navigator.share({
					title: 'Check out this playlist!',
					text: 'Songs that make me think of Nini!',
					url: playlistUrl
				});
			} else {
				await navigator.clipboard.writeText(playlistUrl);
				shareButtonText = 'Copied to Clipboard!';
				isCopied = true;
				setTimeout(() => {
					shareButtonText = 'Share';
					isCopied = false;
				}, 2000);
			}
		} catch (err) {
			console.error('Sharing failed:', err);
			shareButtonText = '...';
			setTimeout(() => (shareButtonText = 'Share'), 2000);
		}
	};
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-rose-900 via-rose-100 to-rose-900 p-4 dark:bg-gradient-to-br dark:from-rose-900 dark:via-black dark:to-rose-900"
>
	<p
		class="z-0 bg-gradient-to-b from-rose-700 via-rose-900 to-rose-950 bg-clip-text text-[50px] font-extrabold text-transparent"
	>
		PLAYLIST
	</p>
	<p
		class="text-5l via-rose-850 bg-gradient-to-b from-rose-800 to-rose-950 bg-clip-text text-transparent"
	>
		for songs that make me think of Nini!
	</p>

	<div class="mt-10 w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl">
		<iframe
			title="Spotify Playlist"
			src={`https://open.spotify.com/embed/playlist/${currentPlaylist}?utm_source=generator&theme=${playlistTheme}`}
			class="h-[352px] w-full border-0 md:h-[400px]"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		>
		</iframe>
	</div>

	<div class="mt-8 flex gap-4">
		<button
			on:click={savePlaylist}
			class="rounded-md bg-rose-900 px-4 py-2 font-semibold text-white shadow-md transition-colors hover:bg-rose-700 focus:ring-2 focus:ring-rose-500 focus:outline-none disabled:opacity-50"
			aria-label="Save playlist on Spotify"
		>
			{saveButtonText}
		</button>

		<button
			on:click={sharePlaylist}
			class="rounded-md border-1 border-rose-600 bg-transparent px-4 py-2 font-semibold text-white shadow-md transition-colors hover:bg-rose-600 hover:text-white focus:ring-2 focus:ring-rose-500 focus:outline-none disabled:opacity-50"
			aria-label="Save playlist to Spotify"
		>
			{shareButtonText}
		</button>
	</div>
</section>

<style>
	section {
		background-size: 200% 200%;
		animation: gradient 12s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
