import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from '../apis/recipes'
import bookmarkReducer from '../reducers/bookmarks'

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
        bookmarks: bookmarkReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(recipeApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>;

