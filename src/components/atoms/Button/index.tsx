import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button``

interface IButtonProps {
    buttonText: string | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button: React.FunctionComponent<IButtonProps> = ({
    buttonText,
    onClick,
}) => {
    return (
        <Wrapper
            onClick={onClick}
        >
            {buttonText}
        </Wrapper>
    )
};

export default Button;

