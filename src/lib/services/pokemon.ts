import type { NamePokemonAPI } from "$lib/types/pokemon";
import { get, all } from "./axios";

const pokemonCount = async () => 
    (await get("pokemon?limit=1"))?.count;

export const getNamePokemons = async () => 
    await get(`pokemon?limit=${await pokemonCount()}`);

export const getPokemons = async (pokemons: NamePokemonAPI[]) => 
    await all(pokemons.map(p => get(p.url)));

export const getOnePokemon = async (name: string) => await get(`pokemon/${name}`)