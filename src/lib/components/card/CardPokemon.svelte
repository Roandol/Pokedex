<script lang="ts">
	import { getUrlImage, getTypeColor } from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI } from '$lib/types/pokemon';

	export let item: PokemonAPI;
</script>

<a
	class="flex justify-between h-full w-full md:flex-col group hover:bg-slate-300 transition-all duration-300"
	href={`/pokemons/${item.name}`}
>
	<div
		class={`${getTypeColor(item.types[0].type)} flex items-center justify-center min-w-36 rounded-r-xl sm:rounded-none sm:rounded-t-xl transition-all duration-300 h-auto md:h-full overflow-visible order-2 group-hover:w-52 md:group-hover:w-auto md:order-1`}
	>
		<img
			src={getUrlImage.default(item)}
			alt="pokemon"
			class="h-32 md:h-48 transition-all duration-300 transform group-hover:-translate-y-5 group-hover:scale-[1.7] group-hover:z-20"
		/>
	</div>
	<div class="flex flex-col min-w-40 gap-2 p-4 order-1 md:order-2">
		<span class="text-lg font-semibold capitalize">Nº {item.id} - {item.name}</span>
		<ul class="flex gap-2">
			{#each item['types'] as slot}
				<li>
					<span class={`${getTypeColor(slot.type)} p-2 rounded-xl text-white capitalize font-semibold`}
						>{slot.type.name}</span
					>
				</li>
			{/each}
		</ul>
	</div>
</a>
