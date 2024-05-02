import { get } from "svelte/store";
import { filteredPokemons as filteredPokemonsStore, namesPokemons, pokemons, loading as loadingStore } from "$lib/store/pokemon"
import type { NamePokemonAPI, PokemonAPI, TypePokemon, UrlImage } from "$lib/types/pokemon";
import { getPokemons } from "$lib/services/pokemon";
import debounce from "$lib/utils/debounce";

const search = debounce((value: string) => {
    const list: NamePokemonAPI[] = get(namesPokemons) ?? [];

    if (!value)
        return filteredPokemonsStore.set([]);

    const filteredList: NamePokemonAPI[] = list.filter(p => p.name.includes(value.toLocaleLowerCase()));

    if (filteredList.length)
        filteredPokemonsStore.set(filteredList);
}, 250)

const getUrlImage: UrlImage = {
    animated: (pokemon: PokemonAPI) => pokemon.sprites.other.showdown.front_default,
    default: (pokemon: PokemonAPI) => pokemon.sprites.front_default
}
const morePokemons = debounce(async () => {
    const listPokemons = get(pokemons);
    const filteredPokemons = get(filteredPokemonsStore);

    const listNamesPokemons = filteredPokemons.length
        ? filteredPokemons.slice(listPokemons.length, listPokemons.length + 50)
        : get(namesPokemons).slice(listPokemons.length, listPokemons.length + 50);


    if (listNamesPokemons.length) {
        loadingStore.set(true);
        
        const more_ps = await getPokemons(listNamesPokemons);

        pokemons.update(ps => [...ps, ...more_ps]);
        loadingStore.set(false);
    }
}, 250) as () => Promise<void>;

const getTypeColor = (slot: TypePokemon) => {
    switch (slot.name) {
        case 'bug':
            return 'bg-green-400';
        case 'dark':
            return 'bg-gray-600';
        case 'dragon':
            return 'bg-teal-500';
        case 'electric':
            return 'bg-yellow-400';
        case 'fairy':
            return 'bg-rose-300';
        case 'normal':
            return 'bg-neutral-400';
        case 'fighting':
            return 'bg-orange-500';
        case 'flying':
            return 'bg-blue-400';
        case 'poison':
            return 'bg-purple-500';
        case 'ground':
            return 'bg-amber-500';
        case 'rock':
            return 'bg-stone-400';
        case 'ghost':
            return 'bg-pink-700';
        case 'steel':
            return 'bg-zinc-400';
        case 'fire':
            return 'bg-red-500';
        case 'grass':
            return 'bg-lime-500';
        case 'psychic':
            return 'bg-violet-700';
        case 'ice':
            return 'bg-cyan-400';
        case 'unknown':
            return 'bg-black';
        case 'shadow':
            return 'bg-neutral-800';
        case 'water':
            return 'bg-blue-400';
    }
};

export {
    pokemons,
    loadingStore as loading,
    search,
    getUrlImage,
    morePokemons,
    getTypeColor
}