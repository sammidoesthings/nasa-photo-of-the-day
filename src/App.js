import React from "react";
import "./App.css";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import {nasaURL, apiKey, keyConnect} from './getapod'

function App() {

  const [nasaData, setNasaData] = useState([]);
  const [spacePhoto, setSpacePhoto] = useState('imgURL')

  useEffect(() => {
    axios.get(`${nasaURL}${keyConnect}${apiKey}`)
      .then(response => {
        setNasaData(response.data)
        console.log(nasaData)
      })
      .catch(err => {
        console.error(err)
      })
  },[]
  )

  console.log(nasaData);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <div> {spacePhoto}
        </div>
      </p>
    </div>
  );
}

export default App;
