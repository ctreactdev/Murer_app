import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [] as string[]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        // setCheck: (state, action) => {
        //     state.todoList.map(item => {
        //         if(action.payload === item.id) {

        //         }
        //     })
        // }
    }
});

export const { saveTodo } = todoSlice.actions
export const selectedTodoList = state => state.todos.todoList
export default todoSlice.reducer