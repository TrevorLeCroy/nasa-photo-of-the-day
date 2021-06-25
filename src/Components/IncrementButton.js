import React from 'react';
import styled from 'styled-components';

const StyledIncrementButton = styled.button`
    width: 100px;
    margin: 0px auto;
    padding: 0px auto;
    margin-right: 1em;
    border-radius: 100px;
    border: none;
    background-color: #fcfbf2;
    color: black;        
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
