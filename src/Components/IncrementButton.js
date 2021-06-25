import React from 'react';
import styled from 'styled-components';

const StyledIncrementButton = styled.button`
    font-size: 100spx;
    margin: 0px auto;
    padding: 0px auto;
    border-radius: 25px;
    height: 2rem;
    border: none;
    background-color: #fcfbf2;
    color: #1d1135;        
`;

const IncrementButton = (props) => {
    return (
        <StyledIncrementButton onClick={() => props.changeNum(props.value)}>
            {
                props.value === 1 ? <p>+</p> : <p>-</p>
            }
        </StyledIncrementButton>
    )
}

export default IncrementButton
