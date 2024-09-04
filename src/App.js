import './App.css';
import {useState} from 'react'
import ProjectPage from './components/projectPage/ProjectPage';
import GamePage from './components/gamePage/GamePage'
import Home from './components/homePage/Home'
import { gamesInfo } from './games';
import { projectInfo } from './projects';
import facePic from './SmilingClosedHeadshotTransparent.png'

import resume from "./resumeFall2023FINALFINAL.pdf"

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const root = document.getElementById("root");

  function renderScreen(){
    switch(currentScreen){
      case 3: changeColor(); return <ProjectPage {...projectInfo.barkInfo}/>;
      case 1: changeColor(); return <GamePage {...gamesInfo.torchlightTangoInfo} />;
      case 2: changeColor(); return <GamePage {...gamesInfo.rootedInMathInfo} />;
      case 0: changeColor(); return <Home />;
      case 4: changeColor(); return <GamePage {...gamesInfo.refugeInfo} />;
      case 5: changeColor(); return <ProjectPage {...projectInfo.mealMasterInfo}/>;
      default: return <div>Home</div>;
    }
  }

  function changeColor(){
    switch(currentScreen){
      case 3: root.style.backgroundColor = `#EADDCA`; break; //bark
      case 1: root.style.backgroundColor = "#BE90D4"; break; //Torchlight tango
      case 2: root.style.backgroundColor = "#B3F5BC"; break; //Rooted in math
      case 0: root.style.backgroundColor = "#FFFFFF"; break; //Home
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
          <li className = "projectButton white"  onClick = {() =>{setCurrentScreen(0);}}>Home<span>{'>'}</span></li>
          <li className = "projectButton brown"  onClick = {() =>{setCurrentScreen(3);}}>Bark<span>{'>'}</span></li>
          <li className=  "projectButton red"    onClick = {() =>{setCurrentScreen(4);}}>Refuge<span>{'>'}</span></li>
          <li className = "projectButton green"  onClick = {() =>{setCurrentScreen(2);}}>Rooted In Math<span>{'>'}</span></li>
          <li className = "projectButton blue"   onClick = {() =>{setCurrentScreen(5);}}>Meal Master<span>{'>'}</span></li>
          <li className = "projectButton yellow" onClick = {() =>{setCurrentScreen(1);}}>Torchlight Tango<span>{'>'}</span></li>


          <li className="profile">
            <div className="profImage"><img src={facePic} id="facePic"></img></div>

            <div className = "socialsArea">
              <a href={resume} download="ferrell2025.pdf"><div className = "socialBox">Check out my resume!</div></a>
              <a href = "https://linktr.ee/robbbieee" target='_blank'><div className = "socialBox">Socials</div></a>
            </div>

          </li>
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
