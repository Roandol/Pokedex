<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	import type { ComponentType, } from 'svelte';
	import { lazyLoadLastItem } from '$lib/utils/lazyload';

	export let list: any[];
	export let loading: boolean;
	export let ItemComponent: ComponentType<SvelteComponent>;
	export let loadMoreItems: () => void;

	onMount(() => {
		const lazyLoad = lazyLoadLastItem('ul > li:last-child', loadMoreItems);

		window.addEventListener('scroll', lazyLoad);
		return () => window.removeEventListener('scroll', lazyLoad);
	});
	
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 m-2 gap-2">
	{#each list as item}
		{#if item}
			<li class="flex items-center rounded-xl border border-gray-400 p-12 text-center">
				<svelte:component {item} this={ItemComponent}/>
			</li>
		{/if}
	{/each}
	{#if loading}
		<span>Loading...</span>
	{/if}
</ul>
