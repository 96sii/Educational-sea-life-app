import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import AnimalAppContainer from "./containers/AnimalAppContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import QuizContainer from './containers/QuizContainer';
import ErrorPage from './components/ErrorPage';
import animalsServices from './services/AnimalsServices';

const App = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(()=>{
    animalsServices.getAnimals()
    .then(animals => setAnimals(animals))
  }, []);

  return (
    <div>
      <Router>
      <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/quiz" element={<QuizContainer />}/>
        <Route path="/animals" element = {<AnimalAppContainer animals = {animals}/>}/>
        <Route element={ErrorPage}/>
      </Routes>
      </>
    </Router>
    </div>
  );
}

export default App;
