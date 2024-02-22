import {configureStore} from '@reduxjs/toolkit';
import { postsReducer } from './features/posts/posts.slice';
import { UsersReducer } from './features/users/user.slice';

export const store = configureStore({
    reducer:{
        posts:postsReducer,
        users:UsersReducer
    }
})