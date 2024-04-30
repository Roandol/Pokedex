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


filteredPokemons.subscribe(nps => {
    loading.set(true);

    if (nps.length)
        getPokemons(nps.slice(0, limitPerPage)).then(ps => {
            pokemons.set(ps)
            loading.set(false);
        });
    else
        getPokemons(get(namesPokemons).slice(0, limitPerPage)).then(ps => {
            pokemons.set(ps)
            loading.set(false);
        });
})