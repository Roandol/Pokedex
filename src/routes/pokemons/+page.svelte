<script lang="ts">
	import CardPokemon from '$lib/components/card/CardPokemon.svelte';
	import List from '$lib/components/list/List.svelte';
	import { pokemons, loading as loadingStore, morePokemons } from '$lib/hooks/pokemon/ListPokemons';
	import { search as searchPokemons } from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI } from '$lib/types/pokemon';

	let list: PokemonAPI[] = [];
	let loading = false;
	let pokemonSearched = '';

	pokemons.subscribe((ps) => (list = ps));
	loadingStore.subscribe((v) => (loading = v));

	$: console.log('Tamanho da lista', list.length);
	$: searchPokemons(pokemonSearched);
</script>

<div>
	<div class="p-2">
		<input
			class="p-2 bg-white bg-opacity-90 rounded-lg w-full"
			name="pikachu"
			placeholder="Pesquise seu pokémon"
			type="text"
			bind:value={pokemonSearched}
		/>
	</div>
	<List {list} {loading} ItemComponent={CardPokemon} loadMoreItems={morePokemons} />
</div>
