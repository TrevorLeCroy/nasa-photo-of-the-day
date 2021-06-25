import React, {useState} from 'react';
import styled from 'styled-components'

const StyledCardFull = styled.div`
    background-color: #fcfbf2;
    width: 30rem;
    border-radius: 2em;
    box-shadow: 6px 6px 6px #0c164f;
    margin-bottom: 10px;
`;

const StyledImg = styled.img`
    width: 25rem;
`;

const Card = (props) => {
    const [isSmallCard, setIsSmallCard] = useState(true);
    const data = props.data;
    console.log(data);

    return (
        <StyledCardFull> 
            <div className='card-inner-container' >
                <h2> {data.title} </h2>
                <h3> {data.date}  </h3>
                {data.media_type === 'image' ? 
                    <StyledImg src={data.hdurl}/> :
                    <StyledImg src={data.thumbnail_url}/>  
                }
                <p> {data.explanation} </p>
            </div>
        </StyledCardFull>
    )
}

export default Card;