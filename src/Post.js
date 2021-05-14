import React from 'react'
import Photo from './Photo'
import DateInput from './DateInput'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: blue;
`;

const StyledH2 = styled.h2`
    color: blue;
`;

const Post = (props) => {



    const {nasaData} = props
    return (
        <div>
            <StyledDiv><h1>Astronomy Photo of the Day</h1></StyledDiv>
            <h2>{nasaData.date}</h2>    
            <Photo nasaData={nasaData}/>
            <StyledH2>{nasaData.title}</StyledH2>
            <p>{nasaData.explanation}</p>
            <DateInput/>
        </div>
    )
}

export default Post