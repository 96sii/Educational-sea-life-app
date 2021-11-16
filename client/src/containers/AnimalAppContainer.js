import React from "react";
import AnimalList from '../components/AnimalList'
import NavBar from '../components/NavBar';
import JumpToMenu from "../components/JumpToMenu";
import '../components/AnimalAppContainer.css'

const AnimalAppContainer = ({animals}) => {


  return (
    <>
      <div className="sea-animals">
      <NavBar/>
        <div className="constraint">
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