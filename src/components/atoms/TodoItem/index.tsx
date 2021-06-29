import React from 'react'
import styled, { css } from 'styled-components'

export const TodoItemStyle = css`

`

// const TodoIteM = styled.div`
//     ${props => TodoItemStyle}
// `

const Wrapper = styled.div``

interface IInputProps {
    name: string;
    done: boolean;
    id: number;
}
const TodoItem: React.FC<IInputProps> = ({
    name,
    done,
}) => {
    const handleCheck = () => {

    }
    return (
        <Wrapper>
            <input type="checkbox" checked={done} onChange={handleCheck} />
            <h1>{name}</h1>
        </Wrapper>
    )
};

export default TodoItem;