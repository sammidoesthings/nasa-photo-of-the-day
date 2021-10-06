import React from "react";
import "./App.css";
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {nasaURL, apiKey, keyConnect} from './getapod';

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`${nasaURL}${keyConnect}${apiKey}`)
      .then(response => {
        setNasaData(response.data)
        return nasaData;
      })
      .catch(err => {
        console.error(err)
      })
  },[]
  );

  console.log(nasaData);

  return (
    <div className="App">

      <p>Here's where you want stuff to show up!</p>
      <p><span role="img" aria-label='go!'>🚀</span> NASA #APOD <span role="img" aria-label='go!'>🚀</span></p>
      
      <div className="apod-container"> 

        <div className="apod-image">
          <img src={`${nasaData.url}`} alt="spacephoto"/>
        </div>

        <div className="apod-desc">
          <p>date: {nasaData.date} | title: {nasaData.title}</p>
          <p>photographer: {nasaData.copyright}</p> 
          <p>explanation: {nasaData.explanation}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
