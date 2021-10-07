import React from "react";
import "./App.css";
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {nasaURL, apiKey, keyConnect} from './getapod';
import { Button, Jumbotron, Container, Collapse } from 'reactstrap';


function App() {

  const [nasaData, setNasaData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

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
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3"><span role="img" aria-label='go!'>🚀</span> NASA #APOD <span role="img" aria-label='go!'>🚀</span></h1>
          <p className="lead">Get your daily dose of space stuff!</p> 
          <hr className="my-2"/>
          <p>Come back every day to see a new photo and read cool new space info!</p>
          <p>Everyday is a new photo and new facts!</p>
          {/* <p className="lead">
          <Button color="warning" onClick={toggle}>See Today's Photo</Button>
          </p> */}
          <hr className="my-2"/>
          <br/>
          <div className="today-section">
            <div className="today-info">
              <h2>Today: {nasaData.date}</h2>
              <h2>{nasaData.title}</h2><br/>
            </div>
            <div className="today-button">
              <p className="lead">
              <Button color="warning" size="lg" onClick={toggle}>See Today's Photo</Button>
              </p>
            </div>
          </div>
          <hr/>

        </Container>
      </Jumbotron>

      <Collapse isOpen={isOpen}>

        <div className="apod-container"> 

          <div className="apod-image">
            <img width="350rem" src={`${nasaData.url}`} alt="spacephoto"/>
          </div>
      <hr className="my-2"/>

          <div className="apod-desc">
            <h5>{nasaData.copyright}</h5> 
            <p className="lead">{nasaData.explanation}</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default App;
