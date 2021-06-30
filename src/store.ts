import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import counterReducer from './features/counter/counterSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer
  },
})
