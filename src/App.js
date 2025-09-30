import './App.css';
import { useCallback, useState, useEffect } from 'react';
import ProjectPage from './components/projectPage/ProjectPage';
import GamePage from './components/gamePage/GamePage'
import Home from './components/homePage/Home'
import { gamesInfo } from './games';
import { projectInfo } from './projects';

import resume from "./ferrellResume2025.pdf"



//Screen consts
const SCREEN = [
  { screenName:"HOME", colorName: "white"},
  { screenName:"THE CATCH", colorName: "pink"},
  { screenName:"BARK", colorName: "brown"},
  { screenName:"TORCHLIGHT TANGO", colorName: "purple"},
  { screenName:"ROOTED IN MATH", colorName: "green"},
  { screenName:"REFUGE", colorName: "red"},
]

const SCREENS = {
  HOME: 0,
  THE_CATCH: 1,
  BARK: 2,
  TORCHLIGHT_TANGO: 3,
  ROOTED_IN_MATH: 4,
  REFUGE: 5,
}
const SCREEN_COLORS = {
  [SCREENS.HOME]: "#FFFFFF",
  [SCREENS.THE_CATCH]: "#FFD3EE",
  [SCREENS.BARK]: "#EADDCA",
  [SCREENS.TORCHLIGHT_TANGO]: "#BE90D4",
  [SCREENS.ROOTED_IN_MATH]: "#B3F5BC",
  [SCREENS.REFUGE]: "#FF6961",
}

const SCREEN_COMPONENTS = {
  [SCREENS.HOME]: <Home />,
  [SCREENS.THE_CATCH]: <ProjectPage {...projectInfo.theCatchInfo} />,
  [SCREENS.BARK]: <ProjectPage {...projectInfo.barkInfo} />,
  [SCREENS.TORCHLIGHT_TANGO]: <GamePage {...gamesInfo.torchlightTangoInfo} />,
  [SCREENS.ROOTED_IN_MATH]: <GamePage {...gamesInfo.rootedInMathInfo} />,
  [SCREENS.REFUGE]: <GamePage {...gamesInfo.refugeInfo} />,
}




function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const renderScreen = useCallback(() => {
    return SCREEN_COMPONENTS[currentScreen] || <div>Home</div>;
  }, [currentScreen]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      const color = SCREEN_COLORS[currentScreen];
      root.style.backgroundColor = color;
    }
  }, [currentScreen]);
  return (
    <div className = "mainContainer">
      <fieldset className = "boxLeft">
        <legend>Projects</legend>
        <ul className="projects">
          {SCREEN.map((screen, index) => {
            return (
              <li className={`projectButton ${screen.colorName}`} onClick={()=>setCurrentScreen(index)}>{screen.screenName}<span>{">"}</span></li>
            )
          })}
          <li className="profile">
            <div className = "socialsArea">
              <a className="socialBox" href={resume} download="ferrellResume2025.pdf" target='_blank'>{"> Resume <"} </a>
              <a className="socialBox" href="https://linktr.ee/robbbieee" target='_blank'>{"> Socials <"}</a>
            </div>

          </li>
        </ul>
      </fieldset>
      <fieldset className = {`boxRight`}>
        <legend>{ SCREEN[currentScreen].screenName}</legend>
        {renderScreen()}
      </fieldset>
    </div>
    
  );
}

export default App;
