import React from 'react'
import Photo from './Photo'


const Post = (props) => {

    const {nasaData} = props
    return (
        <div>
            <h1>Astronomy Photo of the Day</h1>
            <h2>{nasaData.date}</h2>    
            <Photo nasaData={nasaData}/>
            <h2>{nasaData.title}</h2>
            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default Post