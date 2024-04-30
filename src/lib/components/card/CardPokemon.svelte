<script lang="ts">
	import { getUrlImage } from "$lib/hooks/pokemon/ListPokemons";
	import type { PokemonAPI } from "$lib/types";

    export let item: PokemonAPI;
    
</script>

<a class="flex justify-center flex-col" href={`/pokemons/${item.name}`}>
    <img src={getUrlImage(item)} alt="pokemon" class="" />
    <span class="text-lg font-semibold capitalize">{item.id} - {item.name}</span>
</a>