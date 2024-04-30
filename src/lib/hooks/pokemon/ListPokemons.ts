import { get } from "svelte/store";
import { filteredPokemons, namesPokemons, pokemons, loading } from "$lib/store/pokemon"
import type { NamePokemonAPI, PokemonAPI } from "$lib/types";
import { getPokemons } from "$lib/services/pokemon";
import debounce from "$lib/utils/debounce";

const search = (value: string) => {
    const list: NamePokemonAPI[] = get(namesPokemons) ?? [];

    if (value)
        return filteredPokemons.set(list.filter(p => p.name.includes(value.toLocaleLowerCase())));

    filteredPokemons.set([])
}

const getUrlImage = (pokemon: PokemonAPI) => pokemon.sprites.other.showdown["front_default"] ?? pokemon.sprites["front_default"];

let loading_more_ps = false;
const morePokemons = debounce(async () => {
    if (loading_more_ps) return;
    loading_more_ps = true;

    const listPokemons = get(pokemons);
    const listNamesPokemons = get(filteredPokemons).length
        ? get(filteredPokemons).slice(listPokemons.length, listPokemons.length + 100)
        : get(namesPokemons).slice(listPokemons.length, listPokemons.length + 100);

    const more_ps = await getPokemons(listNamesPokemons);

    pokemons.update(ps => [...ps, ...more_ps]);
    loading_more_ps = false;
}, 250)

export {
    pokemons,
    loading,
    search,
    getUrlImage,
    morePokemons
}