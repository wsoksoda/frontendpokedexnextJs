interface pokemon {
  id: number;
  name: string;
  type: { id: number; type: PokemonType }[];
  height: number;
  weight: number;
  ability: abilityInterface[];
  eggGroup: eggGroupInterface[];
  stats: stat;
  genus: string;
  description: string;
}

interface typeInterface {
  type: string;
}
interface abilityInterface {
  ability: string;
}

interface eggGroupInterface {
  eggGroup: string;
}

interface stat {
  id: number;
  hp: number;
  speed: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
}
type PokemonType =
  | "Normal"
  | "Fire"
  | "Water"
  | "Electric"
  | "Grass"
  | "Ice"
  | "Fighting"
  | "Poison"
  | "Ground"
  | "Flying"
  | "Psychic"
  | "Bug"
  | "Rock"
  | "Ghost"
  | "Dragon"
  | "Dark"
  | "Steel"
  | "Fairy";
