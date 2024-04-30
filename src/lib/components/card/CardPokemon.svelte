<script lang="ts">
	import { getUrlImage } from '$lib/hooks/pokemon/ListPokemons';
	import type { PokemonAPI, TypePokemon } from '$lib/types';

	export let item: PokemonAPI;

	if (item.id === 1) console.log(item);

    const getTypeColor = (slot: TypePokemon) => {
        switch (slot.name){
            case "bug":
                return "bg-green-400";
            case "dark":
                return "bg-gray-600";
            case "dragon":
                return "bg-teal-500";
            case "electric":
                return "bg-yellow-400";
            case "fairy":
                return "bg-rose-300";
            case 'normal':
                return "bg-neutral-400";
            case 'fighting':
                return "bg-orange-500";
            case 'flying':
                return "bg-blue-400";
            case 'poison':
                return "bg-purple-500";
            case 'ground':
                return "bg-amber-500";
            case 'rock':
                return "bg-stone-400";
            case 'ghost':
                return "bg-pink-700";
            case 'steel':
                return "bg-zinc-400";
            case 'fire':
                return "bg-red-500";
            case 'grass':
                return "bg-lime-500";
            case 'psychic':
                return "bg-violet-700";
            case 'ice':
                return "bg-cyan-400";
            case 'unknown':
                return "bg-black";
            case 'shadow':
                return "bg-neutral-800";
            case 'water':
                return "bg-blue-400"
        }
    }
</script>

<a class="flex justify-between w-full md:flex-col hover:bg-slate-300" href={`/pokemons/${item.name}`}>
    <div class={`${getTypeColor(item.types[0].type)} flex items-center justify-center min-h-40 rounded-xl order-2 md:order-1`}>
        <img src={getUrlImage.default(item)} alt="pokemon" class="h-40 min-w-32" />
    </div>
	<div class="flex flex-col min-w-40 gap-2 p-4 order-1 md:order-2">
		<span class="text-lg font-semibold capitalize">Nº {item.id} - {item.name}</span>
		<ul class="flex gap-2">
			{#each item['types'] as slot}
				<li>
					<span class={`${getTypeColor(slot.type)} p-2 rounded-xl capitalize font-semibold`}>{slot.type.name}</span>
				</li>
			{/each}
		</ul>
	</div>
</a>
