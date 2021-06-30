import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button``

interface IButtonProps {
    buttonText: string | undefined;
    className?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button: React.FunctionComponent<IButtonProps> = ({
    buttonText,
    className,
    onClick,
}) => {
    return (
        <Wrapper
            onClick={onClick}
            className={className}
            type="button"
        >
            {buttonText}
        </Wrapper>
    )
};

export default Button;

