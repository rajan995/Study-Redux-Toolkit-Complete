import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'App Structure', content: 'study app structure and data folow' ,userId:'0'},
    { id: '2', title: 'Async Logic ', content: 'Async Logic & Thunks' ,userId:'1'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            console.log(action.payload)
            state.push(action.payload);
        },
        deletePost(state, action) {
            state = state.filter(v=>v.id != action.payload);
            return state;
        },
       
    }
})

export const postsReducer = postsSlice.reducer;
export const postsActins = postsSlice.actions;


