import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import PhotoInfo from './PhotoInfo';

function App() {

  const [ data, setData ] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      <PhotoInfo data={data}/>
    </div>
  );
}

export default App;
