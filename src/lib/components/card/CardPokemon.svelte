<script lang="ts">
	import { getUrlImage } from "$lib/hooks/pokemon/ListPokemons";
	import type { PokemonAPI } from "$lib/types";

    export let pokemon: PokemonAPI;
    
    const { name } = pokemon;

</script>

<a class="flex justify-center flex-col" href={`/pokemons/${name}`}>
    <img src={getUrlImage(pokemon)} alt="pokemon" class="" />
    <span class="text-lg font-semibold capitalize">{pokemon.id} - {name}</span>
</a>