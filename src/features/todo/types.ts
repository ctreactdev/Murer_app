import { ADD_TASK, DELETE_TASK } from './actionTypes'

interface AddTodoAction {
    type: typeof ADD_TASK
}
interface DeleteTodoAction {
    type: typeof DELETE_TASK
}
export type TodoActionTypes = AddTodoAction | DeleteTodoAction

export interface SystemState {
    todoList: []
}