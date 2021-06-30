import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultInput, Button, TodoItem } from '../components/atoms'
import { saveTodo, selectedTodoList } from '../features/todo/todoSlice'

const TodoList: React.FC = () => {

  const todoList = useSelector(selectedTodoList)

  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const inputLenght = input.length > 0

  const addTodo = () => {
    if (inputLenght) {
      dispatch(saveTodo({
        item: input,
        done: false,
        id: Date.now()
      }))
    } else
      alert("empty")
  }

  return (
    <div className="container">

      <h1>Todo List!</h1>
      <DefaultInput value={input} onChange={e => setInput(e.target.value)} />
      <Button buttonText="Add todo" className="btn-flat green" onClick={addTodo} />

      <div className="TodoContainer">
        {todoList.map(item => (
          <TodoItem
            name={item.item}
            done={item.done}
            id={item.id}
          />
        ))}
      </div>

    </div>
  )
}
export default TodoList