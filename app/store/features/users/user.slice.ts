import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
;
const initialState = [
    {id:'0',name:'Rajan Nagpal'},
    {id:'1',name:'Prince Nagpal'},
    {id:'2',name:'Shikha Nagpal'},

]

export const fetchUsers = createAsyncThunk('users/fetchUsers',async ()=>{
try{
const response = await axios.get(USERS_URL);
return [...response.data];
}catch(err:any){
   return err.message;
}
})

const userSlice =  createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        return action.payload;
    })
}
})

export const UsersReducer = userSlice.reducer;
export const UsersActions = userSlice.actions;