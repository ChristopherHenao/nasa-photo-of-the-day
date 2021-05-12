import React, { useEffect, useState } from "react";
import "./App.css";

import axios from 'axios'
import Post from './Post.js'







function App() {

  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(function (response) {
        setNasaData(response.data);
      }) 
      .catch(err => 
        console.log(`error: ${err}`))
  }, []);

  console.log(nasaData)

  return (
    <div className="App">
      <Post nasaData={nasaData} />
    </div>
  );
}

export default App;
