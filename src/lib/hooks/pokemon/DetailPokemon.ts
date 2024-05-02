import { getOnePokemon } from "$lib/services/pokemon";
import type { PokemonAPI, TypePokemon } from "$lib/types/pokemon";
import { get, writable } from "svelte/store";
import { pokemons } from "./ListPokemons";

export const myPokemon = writable({} as PokemonAPI);
export const getMyPokemon = async (name: string) => {
    const wanted = get(pokemons).find(p => p.name === name);

    if (wanted)
        return wanted;
    
    return await getOnePokemon(name)
}

export const getTypeFromColor = (slot: TypePokemon) => {
    switch (slot.name) {
        case 'bug':
            return 'from-green-400';
        case 'dark':
            return 'from-gray-600';
        case 'dragon':
            return 'from-teal-500';
        case 'electric':
            return 'from-yellow-400';
        case 'fairy':
            return 'from-rose-300';
        case 'normal':
            return 'from-neutral-400';
        case 'fighting':
            return 'from-orange-500';
        case 'flying':
            return 'from-blue-400';
        case 'poison':
            return 'from-purple-500';
        case 'ground':
            return 'from-amber-500';
        case 'rock':
            return 'from-stone-400';
        case 'ghost':
            return 'from-pink-700';
        case 'steel':
            return 'from-zinc-400';
        case 'fire':
            return 'from-red-500';
        case 'grass':
            return 'from-lime-500';
        case 'psychic':
            return 'from-violet-700';
        case 'ice':
            return 'from-cyan-400';
        case 'unknown':
            return 'from-black';
        case 'shadow':
            return 'from-neutral-800';
        case 'water':
            return 'from-blue-400';
    }
};

export const getTypeToColor = (slot: TypePokemon) => {
    switch (slot.name) {
        case 'bug':
            return 'to-green-400';
        case 'dark':
            return 'to-gray-600';
        case 'dragon':
            return 'to-teal-500';
        case 'electric':
            return 'to-yellow-400';
        case 'fairy':
            return 'to-rose-300';
        case 'normal':
            return 'to-neutral-400';
        case 'fighting':
            return 'to-orange-500';
        case 'flying':
            return 'to-blue-400';
        case 'poison':
            return 'to-purple-500';
        case 'ground':
            return 'to-amber-500';
        case 'rock':
            return 'to-stone-400';
        case 'ghost':
            return 'to-pink-700';
        case 'steel':
            return 'to-zinc-400';
        case 'fire':
            return 'to-red-500';
        case 'grass':
            return 'to-lime-500';
        case 'psychic':
            return 'to-violet-700';
        case 'ice':
            return 'to-cyan-400';
        case 'unknown':
            return 'to-black';
        case 'shadow':
            return 'to-neutral-800';
        case 'water':
            return 'to-blue-400';
    }
};