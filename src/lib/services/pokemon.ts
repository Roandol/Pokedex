import type { NamePokemonAPI } from "$lib/types";
import { request, axios } from "./axios";

const get = async (url: string) => {
    try {
        const res = await request.get(url);
        
        if (res.status === 200)
            return res.data

        console.error(res);
        throw new Error();
    } catch (error) {
        console.error(error);
    }

}

const pokemonCount = async () => 
    (await get("pokemon?limit=1")).count;

export const getNamePokemons = async () => 
    await get(`pokemon?limit=${await pokemonCount()}`);

export const getPokemons = async (pokemons: NamePokemonAPI[]) => 
    await axios.all(pokemons.map(p => get(p.url)));

export const getOnePokemon = async (id: string) => await get(`pokemon/${id}`)