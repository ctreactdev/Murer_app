import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setCheck } from '../../../features/todo/todoSlice'

const Wrapper = styled.div`
.todoCheckbox {
    position: absolute;
    opacity: 1;
    pointer-events: auto;
}
.todoItem--done {
    text-decoration: line-through;
}

`

interface IInputProps {
    name: string;
    done: boolean;
    id: number;
}
const TodoItem: React.FC<IInputProps> = ({
    name,
    done,
    id,
}) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <Wrapper>
            <div className="todo-container">
                <input className="todoCheckbox" type="checkbox" checked={done} onChange={handleCheck} />
                <h3 className={done === true ? 'todoItem--done' : 'none'}>{name}</h3>
            </div>
        </Wrapper>
    )
};

export default TodoItem;