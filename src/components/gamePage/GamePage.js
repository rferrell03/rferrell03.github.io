import React from "react";
import './gamePage.css'


import torchImg from "./torchlightTangoImage.png"
import refugeImg from "./refugeimg.png"
import rootedInMathImg from "./rootedInMathImg.png"

export default function GamePage({ challenges, skills, about, gameplay, image, link, color }) {

    let images = {torch: torchImg, refuge: refugeImg, rooted: rootedInMathImg}
    return(
        <>
            <div className = "headerWrapper">
                <div className="torchContainer">
                    <img src={images[image]} className="torchImg" />
                    <div className="try">
                        <h2><a href={link} className="projectButton" target="_blank" style={{ backgroundColor: color }}>Try it out!</a></h2>
                    </div>
                </div>
                <div className="learningHeaderWrapper">
                    <div className = "learnedExperience">
                        <h2>Challenges:</h2>
                        <p>{challenges}</p>
                    </div>
                    <div className = "line"></div>
                    <div className = "skillsLearned">
                        <h2>Skills learned:</h2>
                        <ul>
                            {skills.map((str) => { return <li>{str}</li>})}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutTorch">
                <h2>About:</h2>
                <p style={{ fontStyle: "italic", fontSize: "20px" }}> {about} </p>
                <h2>Gameplay:</h2>
                <p>{gameplay}</p>
            </div>
        </>
            
    );
}