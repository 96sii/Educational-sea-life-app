import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import { useState, useEffect } from 'react';
import animalsService from "../services/AnimalsServices";
import QuizContainer from "./QuizContainer";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';



const AnimalAppContainer = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(()=>{
    animalsService.getAnimals()
    .then(animals => setAnimals(animals))
  }, []);


  return (
    <>
        <h1>AnimalAppContainer goes here</h1>
        <AnimalList animals = {animals}/>
        <Router>
          <Routes>
            <Route path="/quiz" component={QuizContainer}/>
          </Routes>
        </Router>
    </>
  )
}

export default AnimalAppContainer;