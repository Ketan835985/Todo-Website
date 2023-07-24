/* eslint-disable react-refresh/only-export-components */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {}
})
export const photosSlice = createSlice({
    name: "photos",
    initialState: [],
    reducers: {
        setPhotos: (state, action) => {
            return action.payload
        }
    }
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            // state.push(action.payload)
            return action.payload
        },
        deletePost: (state, action) => {
            state.splice(action.payload, 1)
        },
        updatePost: (state, action) => {
            state[action.payload.id] = action.payload
        },
    }
})


export const Store = configureStore({
    reducer: {
        products: productSlice.reducer,
        posts: postsSlice.reducer,
        photos: photosSlice.reducer
    },
})