import './App.css';
import {useState} from 'react'
import RootedInMath from './components/Rooted In Math/RootedInMath';
import Refuge from './components/Refuge/Refuge';
import MealMaster from './components/Meal Master/MealMaster';
import Bark from './components/Bark/Bark'
import GamePage from './components/TorchlightTango/GamePage'

import { gamesInfo } from './games';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const root = document.getElementById("root");

  function renderScreen(){
    switch(currentScreen){
      case 0: changeColor(); return <Bark />;
      case 1: changeColor(); return <GamePage {...gamesInfo.torchlightTangoInfo} />;
      case 2: changeColor(); return <RootedInMath />;
      case 3: changeColor(); return <div>Home</div>;
      case 4: changeColor(); return <GamePage {...gamesInfo.refugeInfo} />;
      case 5: changeColor(); return <MealMaster />;
      default: return <div>Home</div>;
    }
  }

  function changeColor(){
    switch(currentScreen){
      case 0: root.style.backgroundColor = `#EADDCA`; break; //bark
      case 1: root.style.backgroundColor = "#F9FFB5"; break; //Torchlight tango
      case 2: root.style.backgroundColor = "#B3F5BC"; break; //Rooted in math
      case 3: root.style.backgroundColor = "#FFFFFF"; break; //Home
      case 4: root.style.backgroundColor = "#FF6961"; break; //Refuge
      case 5: root.style.backgroundColor = "#C7E9ED"; break; //Meal Master
      default: break;
    }
  }


  return (
    <div className = "mainContainer">
      <fieldset className = "boxLeft">
        <legend>Projects</legend>
        <ul className = "projects">
          <li className = "projectButton white"  onClick = {() =>{setCurrentScreen(3);}}>Home<span>{'>'}</span></li>
          <li className = "projectButton brown"  onClick = {() =>{setCurrentScreen(0);}}>Bark<span>{'>'}</span></li>
          <li className=  "projectButton red"    onClick = {() =>{setCurrentScreen(4);}}>Refuge<span>{'>'}</span></li>
          <li className = "projectButton green"  onClick = {() =>{setCurrentScreen(2);}}>Rooted In Math<span>{'>'}</span></li>
          <li className = "projectButton blue"   onClick = {() =>{setCurrentScreen(5);}}>Meal Master<span>{'>'}</span></li>
          <li className = "projectButton yellow" onClick = {() =>{setCurrentScreen(1);}}>Torchlight Tango<span>{'>'}</span></li>


          <li className = "profile"><div className = "profImage">imgPlaceholder</div><div className = "profName">Text here</div></li>
          <li className = "socials">socials will go here</li>
        </ul>
      </fieldset>
      <fieldset className = {`boxRight`}>
        <legend>Description</legend>
        {renderScreen()}
      </fieldset>
    </div>
    
  );
}

export default App;
