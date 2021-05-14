import React, { useEffect, useState } from "react";
import "./App.css";

import axios from 'axios'
import Post from './Post.js'
import styled from 'styled-components'


const StyledApp = styled.div`
   margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;



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
    <StyledApp>
      <Post nasaData={nasaData} />
    </StyledApp>
  );
}

export default App;
