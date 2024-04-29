<script lang="ts">
	import { page } from '$app/stores';
	import { getOnePokemon } from '$lib/services/pokemon';
	import { pokemons as pokemonsStore } from '$lib/store/pokemon';
	import { get } from 'svelte/store';
	import type { PokemonAPI } from '$lib/types';

    const id = $page.params.slug;
	const pokemons = get(pokemonsStore);
    let pokemon: PokemonAPI | void;
	
    const downloadPokemon = () => {
		getOnePokemon(id).then((res) => (pokemon = res));
	};

	pokemon = pokemons.find((p) => p.id ===  Number(id)) ?? downloadPokemon();

	$: console.log(pokemon ?? 'Loading...');
</script>
