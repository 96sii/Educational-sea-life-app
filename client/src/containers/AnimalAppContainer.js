import React from "react";
import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import QuizContainer from "./QuizContainer";
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import JumpToMenu from "../components/JumpToMenu";
 

const AnimalAppContainer = ({animals}) => {



  return (
    <>
    <JumpToMenu />
    <div className="constraint">
      <NavBar/>
      <h1>AnimalAppContainer - LIST OF ANIMALS GOES HERE</h1>
      <AnimalList animals = {animals}/>
      </div>
    </>
  )
}

export default AnimalAppContainer;