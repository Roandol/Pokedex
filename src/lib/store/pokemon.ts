import { getNamePokemons as getNamesPokemons, getPokemons } from "$lib/services/pokemon";
import type { NamePokemonAPI, PokemonAPI } from "$lib/types";
import { get, writable, } from "svelte/store";

export const loading = writable(false);
export const namesPokemons = writable<NamePokemonAPI[]>([]);
export const filteredPokemons = writable<NamePokemonAPI[]>([]);
export const pokemons = writable<PokemonAPI[]>([]);
const limitPerPage = 50;

loading.set(true);

getNamesPokemons().then(nps => {
    namesPokemons.set(nps.results);

    getPokemons(nps.results.slice(0, limitPerPage)).then(ps => {
        pokemons.set(ps)
        loading.set(false);
    });
});


filteredPokemons.subscribe(async (nps) => {
    loading.set(true);

    if (nps.length) {
        const ps = await getPokemons(nps.slice(0, limitPerPage));

        pokemons.set(ps);
    }
    else {
        const ps = await getPokemons(get(namesPokemons).slice(0, limitPerPage))

        pokemons.set(ps)
    }
    
    loading.set(false);
})