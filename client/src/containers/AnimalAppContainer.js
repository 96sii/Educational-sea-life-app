import React from "react";
import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import QuizContainer from "./QuizContainer";
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import JumpToMenu from "../components/JumpToMenu";
import MyGallery from '../components/MyGallery';
import '../components/AnimalAppContainer.css'

const AnimalAppContainer = ({animals, items}) => {


  return (
    <>
      <div className="constraint">
        <NavBar/>
        <JumpToMenu />
        <h1>AnimalAppContainer - LIST OF ANIMALS GOES HERE</h1>
        <AnimalList animals = {animals}/>
        <MyGallery items = {items} />
      </div>
    </>
  )
}

export default AnimalAppContainer;