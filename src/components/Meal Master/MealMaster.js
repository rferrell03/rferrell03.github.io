import React from "react";
import './projectPage.css';

export default function MealMaster() {
    return (
        <>
            <div className = "projectHeader">
                <div className="projectContainer">
                    <img src=""/*images[image]*/ className="image" />
                    <div className="try">
                        <h2><a href=""/*{link}*/ className="projectButton" target="_blank" style={{ backgroundColor: "white"}}>Try it out!</a></h2>
                    </div>
                </div>
                <div className="DECIDEHERE">
                    <h1>DECIDE WHAT GOES HERE</h1>
                </div>
            </div>
            <div className="aboutTorch">
                <h2>About:</h2>
                <p style={{ fontStyle: "italic", fontSize: "20px" }}></p>
                <h2>Gameplay:</h2>
                <p></p>
            </div>
        </>
    )
}