import React from 'react';
import Styled from 'styled-components';


const ComponentStyles = Styled.div`
    border: 2px solid black;
    border-radius: 30px;
    width: 50%;
    background-color: LavenderBlush;
    margin: 0 auto 4% auto;
    
    img {
        max-width: 80%;
        padding-top: 5%;
    }

    p {
        max-width: 80%;
        text-align: center;
        margin: 0 auto;
        padding-bottom: 5%;
    }

`


const PhotoInfo = (props) => {

    const { data } =  props


    return (
        <ComponentStyles>
            <img src={data.url} alt='photo of the day'/>
            <h2>{data.title}, by {data.copyright}</h2>
            <h3>Date: {data.date}</h3>
            <p>{data.explanation}</p>
        </ComponentStyles>
    )
}

export default PhotoInfo



// -Component did Mount

// -Component did Update

// -Component will unMount

// -Render

