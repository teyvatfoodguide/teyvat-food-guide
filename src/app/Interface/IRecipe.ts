export interface Ingredient{
    name: string,
    amount: number
}

export interface FoodPotency{
    type: string,
    description: string,
    effect: string
}

export interface Recipe{
    name: string,
    ingredients: Ingredient[],
    obtainedFrom: string[],
    isSpecial: boolean,
    //regular recipe
    foodPotency: FoodPotency[],
    //special recipe
    baseRecipe: string,
    cooker: string,
    effect: string,
    description: string
}