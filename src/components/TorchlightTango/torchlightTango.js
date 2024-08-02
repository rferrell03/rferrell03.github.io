import React from "react";
import './torchlightTango.css'
import logo from './torchlightTangoImage.png'

export default function TorchlightTango(){
    return(
        <>
            <div className = "headerWrapper">
                <div className="torchContainer">
                    <img src={logo} className="torchImg" />
                    <div className="torchTry">
                        <h2><a href = "https://github.com/CSC-3380-Spring-2024/bark" className = "projectButton" target="_blank">Try it out!</a></h2>
                    </div>
                </div>
                <div className="learningHeaderWrapper">
                    <div className = "learnedExperience">
                        <h2>Challenges:</h2>
                        <p>This project was completed during the LSU Summer gamejam.<br />While it felt unapproachable at first, Unity actually is very intuitive and satisfying to use.</p>
                    </div>
                    <div className = "line"></div>
                    <div className = "skillsLearned">
                        <h2>Skills learned:</h2>
                        <ul>
                            <li>Unity Basics</li>
                            <li>Git with larger projects</li>
                            <li>Level design basics</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutTorch">
                <h2>About:</h2>
                <p style={{ fontStyle: "italic", fontSize: "20px"}}>Without the eternal flame in its rightful place atop the great tower the land has become casted in darkness. 
There is hope yet, however. At the bottom of the great tower is a window into the core of the planet itself where fiery flames never cease. If only someone could retreive a portion of those flames and reignite the bonfire atop the tower.
You, along with one other companion, must do just that. 
With only the light of a small torch to guide the way in the darkness, you must solve puzzles, navigate treacherous paths, and thwart the ancient mysterious forces that reside within the tower. Can you succeed and bring light to the land once more?</p>
                <h2>Gameplay:</h2>
                <p>Torchlight tango is a two-person multiplayer platformer. Make your way through challenging puzzles and platforming sections, all while managing your shared light source. Throw the torch between you and your teammate, and try to reach the end!</p>
            </div>
        </>
            
    );
}