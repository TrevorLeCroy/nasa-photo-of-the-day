import React, {useState} from 'react';

const Card = (props) => {
    const [style, setStyle] = useState({});
    const data = props.data;
    console.log(data);

    return (
        <div className='card'> 
            <div className='card-inner-container' >
                <h2> {data.title} </h2>
                <h3> {data.date}  </h3>
                {data.media_type == 'image' ? 
                    <img src={data.hdurl}/> :
                    <img src={data.thumbnail_url}/>  
                }
                <p> {data.explanation} </p>
            </div>
        </div>
    )
}

export default Card;