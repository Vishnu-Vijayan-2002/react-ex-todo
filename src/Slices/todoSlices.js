import { createSlice } from "@reduxjs/toolkit";

const todoSlices= createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
    }
})
export const {addTodo}=todoSlices.actions;
export default todoSlices.reducer;