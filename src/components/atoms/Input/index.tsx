import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input``

interface IInputProps {
    value: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const Input: React.FunctionComponent<IInputProps> = ({
    value,
    onChange,

}) => {
    return (
        <Wrapper
            value={value}
            onChange={onChange}
        />
    )
};

export default Input;