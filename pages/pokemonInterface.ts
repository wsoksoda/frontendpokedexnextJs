export interface pokemon{
    id: number,
    name:string,
    type: typeInterface[],
    height: number,
    weight:number,
    ability: abilityInterface[],
    eggGroup: eggGroupInterface[],
    stats: stat,
    genus: string,
    description: string
}

export interface typeInterface{
    type:string
}

export interface abilityInterface{
    ability:string
}

export interface eggGroupInterface{
    eggGroup:string
}



export interface stat{
id:number,
hp:number,
speed:number,
attack:number,
defense:number,
specialAttack:number,
specialDefense:number
}

export const statColor:{ Normal: string,
Fire :string,
Water : string,
Electric: string,
Grass: string,
Ice: string,
Fighting: string,
Poison: string,
Ground: string,
Flying: string,
Psychic: string,
Bug: string,
Rock: string,
Ghost: string,
Dragon: string,
Dark:string,
Steel: string,
Fairy: string,} ={
        Normal: '#A8A77A',
        Fire :'#EE8130',
        Water : '#6390F0',
        Electric: '#F7D02C',
        Grass: '#7AC74C',
        Ice: '#96D9D6',
        Fighting: '#C22E28',
        Poison: '#A33EA1',
        Ground: '#E2BF65',
        Flying: '#A98FF3',
        Psychic: '#F95587',
        Bug: '#A6B91A',
        Rock: '#B6A136',
        Ghost: '#735797',
        Dragon: '#6F35FC',
        Dark:'#705746',
        Steel: '#B7B7CE',
        Fairy: '#D685AD',
}





