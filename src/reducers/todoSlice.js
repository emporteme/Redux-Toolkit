import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    state: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer 