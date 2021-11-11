import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import { useState, useEffect } from 'react';
import animalsService from "../services/AnimalsServices";



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
    </>
  )
}

export default AnimalAppContainer;