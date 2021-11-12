import React from "react";
import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import QuizContainer from "./QuizContainer";
import { Link } from "react-router-dom";





const AnimalAppContainer = ({animals}) => {


  return (
    <>
        <h1>AnimalAppContainer - LIST OF ANIMALS GOES HERE</h1>
        <AnimalList animals = {animals}/>
    </>
  )
}

export default AnimalAppContainer;