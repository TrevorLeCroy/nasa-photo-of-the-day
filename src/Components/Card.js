import React, {useState} from 'react';
import styled, {css} from 'styled-components'

const StyledCardFull = styled.div`
    background-color: #fcfbf2;
    width: 30rem;
    border-radius: 2em;
    box-shadow: 6px 6px 6px #0c164f;
    margin-bottom: 10px;
    
    img { 
        width: 25rem;
    }

    ${props => props.isSmall === true && css`
        margin-right: 1em;
        background-color: #fcfbf2;
        width: 30rem;
        border-radius: 2em;
        box-shadow: 6px 6px 6px #0c164f;
        margin-bottom: 10px;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;

        h2 h3 {
            text-align: center;
        }

        img {
            margin-top: 5px;
            margin-bottom: 5px;
            margin-right: 5px;
            border-radius: 10em;
            width: 10vw;
            height: 20vh;
        }

        p {
            display: none;
        }
    `}
`;

const Card = (props) => {
    const [isSmallCard, setIsSmallCard] = useState(true);
    //const [currentStyle, setCurrentStyle] = useState(StyledCardFull);
    const data = props.data;
    console.log(data);

    const updateCurrentStyle = () => {
        console.log('Cool');
        setIsSmallCard(!isSmallCard);
    }

    return (
        <div onClick={() => updateCurrentStyle()}>
            <StyledCardFull isSmall={isSmallCard}> 
                <div className='card-base-info'>
                    <h2> {data.title} </h2>
                    <h3> {data.date}  </h3>
                </div>
                {data.media_type === 'image' ? 
                    <img src={data.hdurl}/> :
                    <img src={data.thumbnail_url}/>  
                }
                <p> {data.explanation} </p>
            </StyledCardFull>
        </div>
    )
}

export default Card;