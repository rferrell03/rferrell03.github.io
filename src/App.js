import TorchlightTango from './components/TorchlightTango/torchlightTango';
import './App.css';
import {useState} from 'react'
function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const root = document.getElementById("root");

  function renderScreen(){
    switch(currentScreen){
      case 0: changeColor(); return <div>Project 1</div>;
      case 1: changeColor(); return <TorchlightTango />;
      case 2: changeColor(); return <div>Project 3</div>;
      case 3: changeColor(); return <div>Home</div>
      case 4: changeColor(); return <div>Refuge</div>
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
      default: break;
    }
  }


  return (
    <div className = "mainContainer">
      <fieldset className = "boxLeft">
        <legend>Projects</legend>
        <ul className = "projects">
          <li className = "projectButton white" onClick={()=>{setCurrentScreen(3);}}>Home<span>{'>'}</span></li>
          <li className = "projectButton brown" onClick = {() =>{setCurrentScreen(0);}}>Bark.<span>{'>'}</span></li>
          <li className = "projectButton yellow" onClick = {() =>{setCurrentScreen(1);}}>Torchlight Tango<span>{'>'}</span></li>
          <li className = "projectButton green" onClick = {() =>{setCurrentScreen(2);}}>Rooted In Math<span>{'>'}</span></li>
          <li className = "projectButton red" onClick = {() =>{setCurrentScreen(4);}}>Refuge<span>{'>'}</span></li>

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
