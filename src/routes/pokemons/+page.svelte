<script lang="ts">
	import List from '$lib/components/list/List.svelte';
	import { pokemons, loading as loadingStore, morePokemons } from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI } from '$lib/types';
	import { lazyLoadLastItem } from '$lib/utils/lazyload';
	import { onMount } from 'svelte';

	let list: PokemonAPI[] = [];
	let loading = false;

	pokemons.subscribe((ps) => (list = ps));
	loadingStore.subscribe((v) => (loading = v));

	onMount(() => {
		const lazyLoad = lazyLoadLastItem('ul > li:last-child', morePokemons);

		window.addEventListener('scroll', lazyLoad);
		return () => window.removeEventListener('scroll', lazyLoad);
	});
</script>

<div>
	<List {list}/>
	{#if loading}
		<span>Loading...</span>
	{/if}
</div>
