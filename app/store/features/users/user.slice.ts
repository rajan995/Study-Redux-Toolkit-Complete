import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:'0',name:'Rajan Nagpal'},
    {id:'1',name:'Prince Nagpal'},
    {id:'2',name:'Shikha Nagpal'},

]
const userSlice =  createSlice({
    name:'users',
    initialState,
    reducers:{

    }

})

export const UsersReducer = userSlice.reducer;
export const UsersActions = userSlice.actions;