import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState: { 
    bookmarks: Set<number>,
    bookmarkOpening: boolean,

} = {
    bookmarks: new Set(),
    bookmarkOpening: false,
}

export const addBookmark = createAction<number>('addBookmark')
export const removeBookmark = createAction<number>('removeBookmark')
export const openBookmark = createAction<void>('openBookmark')
export const closeBookmark = createAction<void>('closeBookmark')

const bookmarkReducer = createReducer(initialState, (builder) => {
    builder.addCase(addBookmark, (state, action) => { state.bookmarks.add(action.payload)})
        .addCase(removeBookmark, (state, action) => { state.bookmarks.delete(action.payload)})
        .addCase(openBookmark, (state) => { state.bookmarkOpening = true })
        .addCase(closeBookmark, (state) => { state.bookmarkOpening = false })
})

export default bookmarkReducer;