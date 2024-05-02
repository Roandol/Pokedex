export interface NamePokemonAPI {
    name: string;
    url: string;
}

interface SpritesForms {
    "back_default": string | null;
    "back_female": string | null;
    "back_shiny": string | null;
    "back_shiny_female": string | null;
    "front_default": string;
    "front_female": string | null;
    "front_shiny": string | null;
    "front_shiny_female": string | null;
}

type SpriteShowdown = SpritesForms;

interface SpritesOther {
    showdown: SpriteShowdown;
}

interface PokemonSprites extends SpritesForms {
    other: SpritesOther;
}

export interface TypePokemon {
    name: "normal" | "water" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
    url: string;
}

export interface SlotTypePokemon {
    slot: number;
    type: TypePokemon;
}

interface StatType {
    name: string;
    url: string;
}

export interface SlotStatPokemon {
    base_stat: number;
    effort: number;
    stat: StatType
}

export interface PokemonAPI {
    name: string;
    id: number;
    sprites: PokemonSprites;
    getUrlImage: () => string;
    types: SlotTypePokemon[]
    stats: SlotStatPokemon[]
}

export interface UrlImage {
    animated: (pokemon: PokemonAPI) => string | null;
    default: (pokemon: PokemonAPI) => string | null;
}
