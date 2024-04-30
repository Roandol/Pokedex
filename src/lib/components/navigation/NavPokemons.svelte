<script lang="ts">
	import { search as searchPokemons } from '$lib/hooks/pokemon/ListPokemons';

	let pokemonSearched = '';
	
	$: searchPokemons(pokemonSearched);	
</script>

<nav class="flex justify-between bg-red-600 p-2">
	<img class="h-10" src="/pokédex_logo.png" alt="icon" />
	<input
		class="p-2 bg-white bg-opacity-90 rounded-lg"
		name="pikachu"
		placeholder="Pesquise seu pokémon"
		type="text"
		bind:value={pokemonSearched}
	/>
</nav>
