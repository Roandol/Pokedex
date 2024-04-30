<script lang="ts">
	import CardPokemon from '$lib/components/card/CardPokemon.svelte';
	import List from '$lib/components/list/List.svelte';
	import { pokemons, loading as loadingStore, morePokemons } from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI } from '$lib/types';

	let list: PokemonAPI[] = [];
	let loading = false;

	pokemons.subscribe((ps) => (list = ps));
	loadingStore.subscribe((v) => (loading = v));
</script>

<div>
	<List {list} {loading} ItemComponent={CardPokemon} loadMoreItems={morePokemons}/>
</div>
