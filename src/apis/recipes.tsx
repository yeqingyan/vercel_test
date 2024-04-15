import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Recipe, RecipeApiResponse, RecipeJson } from '../types/Recipe.d'

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mob.co.uk/task/' }),
    endpoints: (builder) => ({
        getRecipes: builder.query<Recipe[], void>({
            query: () => `recipes.json`,
            transformResponse: (response: RecipeApiResponse): Recipe[] => response.recipes.map(recipeJson => ({
                id: recipeJson.id,
                title: recipeJson.title,
                imageUrl: recipeJson.image[0].url
            })),
        }),
    }),
})

export const { useGetRecipesQuery } = recipeApi