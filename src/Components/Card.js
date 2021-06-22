import React from 'react';

const Card = (props) => {
    const data = props.data;
    console.log(data);

    return (
        <div className='card'> 
            <div className='card-inner-container' >
                <h2> {data.title} </h2>
                <h3> {data.date}  </h3>
                {data.media_type == 'image' ? 
                    <img src={data.hdurl}/> :
                    <video width='750' height='500' controls>
                        <source src={data.hdurl} type='video/mp4'/>
                    </video> }
                <p> {data.explanation} </p>
            </div>
        </div>
    )
}

export default Card;