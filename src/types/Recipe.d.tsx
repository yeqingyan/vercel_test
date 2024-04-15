
export type Recipe = {
    id: number;
    title: string;
    imageUrl: string;
} 

export type RecipeApiResponse = {
    recipes: RecipeJson[]; 
}
export type RecipeJson = {
    id: number;
    title: string;
    image: RecipeImageJson[]
}

export type RecipeImageJson = {
    id: number;
    url: string;
}