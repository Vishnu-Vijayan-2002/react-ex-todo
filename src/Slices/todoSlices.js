import { createSlice } from "@reduxjs/toolkit";

const todoSlices= createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
          },
    }
})
export const {addTodo,deleteTodo}=todoSlices.actions;
export default todoSlices.reducer;
