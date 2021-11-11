import React from "react";

import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import { useState, useEffect } from 'react';
import animalsService from "../services/AnimalsServices";
import QuizContainer from "./QuizContainer";
import { Link } from "react-router-dom";





const AnimalAppContainer = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(()=>{
    animalsService.getAnimals()
    .then(animals => setAnimals(animals))
  }, []);


  return (
    <>
        <h1>AnimalAppContainer - LIST OF ANIMALS GOES HERE</h1>
        <AnimalList animals = {animals}/>
        {/* <li>
            <Link to="/hello">Hello</Link>
        </li> */}
    </>
  )
}

export default AnimalAppContainer;