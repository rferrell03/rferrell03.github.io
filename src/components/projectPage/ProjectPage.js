import React from "react";
import './projectPage.css';

import barkImg from "./barkLogo.png"
import mealImg from "./mealMasterPic.PNG"
export default function ProjectPage({features, tech, about, challenges, color, link, image, name}) {

    let images = { bark: barkImg, meal: mealImg}
    return (
        <>
            <div className = "projectHeader">
                <div className="projectContainer">
                    <img src={images[image]} className="projectImage" />
                    <div className="try">
                        <h2><a href={link} className="projectButton" target="_blank" style={{ backgroundColor: color}}>Try it out!</a></h2>
                    </div>
                </div>
                <div className="projectInfo">
                    <h1>{name}</h1>
                    <div className = "headerColumns">
                        <div className="features">
                            <h3>Features:</h3>
                            <ul>
                                {features.map((str) => { return <li>{str}</li>})}
                            </ul>
                        </div>
                        <div className="techUsed">
                            <h3>Tech used:</h3>
                            <ul>
                                {tech.map((str) => { return <li>{str}</li>})}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutTorch">
                <h2>About:</h2>
                <p>{about}</p>
                <h2>Challenges:</h2>
                <p>{challenges}</p>
            </div>
        </>
    )
}