<script>
	import {search as searchPokemons} from '$lib/hooks/pokemon/ListPokemons';

	let pokemonSearched = "";

	const handleSubmit = () => {
		searchPokemons(pokemonSearched);
	}
</script>

<nav class="flex justify-between bg-red-600 p-2">
	<img class="h-10" src="/pokédex_logo.png" alt="icon">
	<form class="space-x-2" on:submit|preventDefault={handleSubmit}>
		<input class="p-2 bg-white bg-opacity-90 rounded-lg" name="pikachu" placeholder="Pesquise seu pokémon" type="text" bind:value={pokemonSearched} />
		<button type="submit">Pesquisar</button>
	</form>
</nav>