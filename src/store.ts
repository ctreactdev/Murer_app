// import { combineReducers, createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
// import { CounterReducer } from './features/counter'
// import { TodoReducer } from './features/todo'

// /* Create root reducer, containing all features of the application */
// const rootReducer = combineReducers({
//   count: CounterReducer,
//   todos: TodoReducer,
// })

// const store = createStore(
//   rootReducer,
//   /* preloadedState, */ devToolsEnhancer({})
// )

// export default store



import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import counterReducer from './features/counter/counterSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    counter: counterReducer
  },
})
