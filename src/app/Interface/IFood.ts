export interface Food{
    id: string,
    name: string,
    rarity: number,
    hasRecipe: boolean,
    effect: string,
    description: string,
    obtainedFrom: string[]
}