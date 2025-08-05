<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly, fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	type ToastType = 'info' | 'success' | 'error';

	interface Toast {
		id: number;
		message: string;
		type: ToastType;
		duration: number;
	}

	const toasts = writable<Toast[]>([]);

	export function showToast({
		message,
		type = 'info',
		duration = 3000
	}: {
		message: string;
		type?: ToastType;
		duration?: number;
	}) {
		const id = Date.now() + Math.random();
		toasts.update((t) => [...t, { id, message, type, duration }]);

		const timer = setTimeout(() => {
			toasts.update((t) => t.filter((toast) => toast.id !== id));
		}, duration + 300);

		onDestroy(() => clearTimeout(timer));
	}

	const typeStyles = {
		info: 'border-blue-400 text-blue-100',
		success: 'border-green-400 text-green-100',
		error: 'border-red-400 text-red-100'
	};
</script>

<div class="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-2">
	{#each $toasts as toast (toast.id)}
		<div
			class={`flex w-72 items-start justify-between rounded-xl border bg-white/10 p-4 shadow-xl backdrop-blur-lg ${
				typeStyles[toast.type] || typeStyles.info
			}`}
			in:fly={{ x: 100, y: 20, duration: 300 }}
			out:fade={{ duration: 300 }}
		>
			<span class="text-sm font-medium">{toast.message}</span>
			<button
				class="ml-4 text-sm text-white hover:text-red-300"
				on:click={() => toasts.update((t) => t.filter((t) => t.id !== toast.id))}
			>
				✕
			</button>
		</div>
	{/each}
</div>
