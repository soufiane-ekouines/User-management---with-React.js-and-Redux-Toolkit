import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const initialSlice = userList;

export const user = createSlice({
    name: 'users',
    initialState: initialSlice,
    reducers: {
        adduser: (state, actions) => {
            console.log(actions);
            state.push(actions.payload)
        },
        updateuser: (state, actions) => {
            console.log(actions);
            const { id, name, email } = actions.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteuser: (state, actions) => {
            console.log(actions);
            const { id } = actions.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);

            }
        }
    }
})

export const { adduser, updateuser, deleteuser } = user.actions;
export default user.reducer;