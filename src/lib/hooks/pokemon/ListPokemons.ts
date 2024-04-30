import { get } from "svelte/store";
import { filteredPokemons as filteredPokemonsStore, namesPokemons, pokemons, loading } from "$lib/store/pokemon"
import type { NamePokemonAPI, PokemonAPI, UrlImage } from "$lib/types";
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
        loading.set(true);
        
        const more_ps = await getPokemons(listNamesPokemons);

        pokemons.update(ps => [...ps, ...more_ps]);
        loading.set(false);
    }
}, 250)

export {
    pokemons,
    loading,
    search,
    getUrlImage,
    morePokemons
}