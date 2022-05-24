import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [] as any,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
})

export const {} = todoSlice.actions
export const selectedTodoList = (state) => state.todos.todoList
export default todoSlice.reducer
