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

interface SpriteShowdown extends SpritesForms{

}

interface SpritesOther {
    showdown: SpriteShowdown;
}

interface PokemonSprites extends SpritesForms {
    other: SpritesOther;
}

export interface PokemonAPI {
    name: string;
    id: number;
    sprites: PokemonSprites;
    getUrlImage: () => string;
}