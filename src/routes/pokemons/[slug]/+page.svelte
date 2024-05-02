<script lang="ts">
	import { page } from '$app/stores';
	import type { PokemonAPI } from '$lib/types/pokemon';
	import { getMyPokemon } from '$lib/hooks/pokemon/DetailPokemon';
	import { getTypeColor, getUrlImage } from '$lib/hooks/pokemon/ListPokemons';

	const name = $page.params.slug;
	let pokemon: PokemonAPI;

	const get = async () => (pokemon = await getMyPokemon(name));

	get();

	$: console.log(pokemon && pokemon.stats);
</script>

{#if pokemon}
	<div
		class={`mt-2 mx-2 p-4 md:mx-20 border-2 border-gray-500 rounded-xl text-white shadow-lg shadow-gray-700 ${getTypeColor(pokemon.types[0].type)}`}
	>
		<section class={`flex flex-col rounded-xl`}>
			<div class="flex justify-between items-center">
				<span class="capitalize mb-2 font-semibold text-2xl">Nº {pokemon.id} - {pokemon.name}</span>
			</div>
			<div
				class={`relative flex flex-col py-10 w-full items-center rounded-xl bg-cover bg-center`}
				style="background-image: url('/floresta.jpg')"
			>
				<div class="absolute top-0 right-0 items-center z-0">
					<div
						class="inline-flex items-center bg-grey-light m-2 pr-2 rounded-lg border border-gray-500 bg-gray-500 hp"
						style={`--hp-length: ${pokemon.stats[0].base_stat}vw;`}
					>
						<span class="font-semibold text-white mx-2">HP</span>
						<div class="bg-green-400 text-xs leading-none h-2 w-full"></div>
					</div>
				</div>
				<img
					class="transition-all duration-300 h-[30vh] md:h-[50vh] z-10"
					src={getUrlImage.animated(pokemon) ?? getUrlImage.default(pokemon)}
					alt="pokemon"
				/>
			</div>
		</section>
		<section>
			<div class="text-xl px-2 font-semibold capitalize">
				<div class="grid grid-cols-2 gap-x-5 w-fit">
					{#each pokemon.stats.slice(1, pokemon.stats.length) as slot}
						<span class="text-nowrap">{slot.stat.name}:</span>
						<span>{slot.base_stat}</span>
					{/each}
				</div>
			</div>
		</section>
	</div>
{/if}
