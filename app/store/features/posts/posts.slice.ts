import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

type initialStateType = {
    posts: any[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null | undefined
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return [...response.data];
    } catch (err: any) {
        return err.message
    }
})

export const addNewPosts = createAsyncThunk('post/addNewPost', async (initialPost:any) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
})

const initialState: initialStateType = {
    posts: [],
    status: 'idle', // idle ,loading, succeeded, failed
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            console.log(action.payload)
            state.posts.push(action.payload);
        },
        deletePost(state, action) {
            state = { ...state, posts: state.posts.filter(v => v.id != action.payload) };
            return state;
        },

    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewPosts.fulfilled,(state,action)=>{
                state.posts.push(action.payload);
            })

    },
})

export const postsReducer = postsSlice.reducer;
export const postsActins = postsSlice.actions;



