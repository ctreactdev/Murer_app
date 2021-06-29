import { ADD_TASK, DELETE_TASK } from './actionTypes'
import { TodoActionTypes } from './types'

const initialState = {
    todoList: []
}

export default (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case ADD_TASK:
            console.log(action.type);

            return { ...state, todoList: state.todoList }
        case DELETE_TASK:
            return { ...state, todoList: state.todoList }
        default:
            return state
    }
}
