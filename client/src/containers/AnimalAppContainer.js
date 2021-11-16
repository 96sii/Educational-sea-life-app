import React from "react";
import Animal from "../components/Animal";
import AnimalList from '../components/AnimalList'
import QuizContainer from "./QuizContainer";
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import JumpToMenu from "../components/JumpToMenu";
import MyGallery from '../components/MyGallery';
import '../components/AnimalAppContainer.css'

const AnimalAppContainer = ({animals}) => {


  return (
    <>
      <div className="sea-animals">
        <div className="constraint">
            <NavBar/>

            <div className="content-container">
              <JumpToMenu />
              <AnimalList animals = {animals}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default AnimalAppContainer;