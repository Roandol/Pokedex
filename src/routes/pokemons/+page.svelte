<script lang="ts">
	import NavPokemons from '$lib/components/navigation/NavPokemons.svelte';
	import ListPokemons from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI } from '$lib/types';
	import { onMount } from 'svelte';

	const { pokemons, getUrlImage, loading: loadingStore, morePokemons } = ListPokemons;

	let list: PokemonAPI[] = [];
	let loading = false;

	pokemons.subscribe((ps) => (list = ps));
	loadingStore.subscribe((v) => (loading = v));

	const lazyLoad = () => {
		const lastItem = document.querySelector('ul > li:last-child');
		
		if (lastItem && (lastItem.getBoundingClientRect().bottom / 2) <= window.innerHeight) {
			morePokemons()
		}
	};

	onMount(() => {
		window.addEventListener('scroll', lazyLoad);
		return () => window.removeEventListener('scroll', lazyLoad);
	});
</script>

<div>
	<ul class="flex flex-wrap gap-2 justify-center">
		{#if loading}
			<span>Loading...</span>
		{:else}
			{#each list as pokemon}
				{#if pokemon}
					<li class="flex items-center rounded-xl border border-gray-400 p-12 text-center">
						<a class="flex justify-center flex-col" href={`/pokemons/${pokemon.id}`}>
							<img src={getUrlImage(pokemon)} alt="pokemon" class="max-h-32" />
							<span class="text-lg font-semibold capitalize">{pokemon.id} - {pokemon.name}</span>
						</a>
					</li>
				{/if}
			{/each}
		{/if}
	</ul>
</div>
