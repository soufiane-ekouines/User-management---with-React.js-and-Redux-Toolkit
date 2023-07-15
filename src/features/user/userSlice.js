import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const initialSlice=userList;

export const user = createSlice({
    name:'users',
    initialState:initialSlice,
    reducers:{
        adduser:(state,actions)=>{
            console.log(actions);
            state.push(actions.payload)
        }
    }
})

export const {adduser} = user.actions;
export default user.reducer;