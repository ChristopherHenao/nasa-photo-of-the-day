import React from 'react'




const Photo = (props) => {

    const {nasaData} = props;
    
    return (
        <img src={nasaData.url} alt="Photo of the day"/>
    )
}

export default Photo