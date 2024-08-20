import React from "react";
import './projectPage.css';

export default function MealMaster() {
    return (
        <>
            <div className = "projectHeader">
                <div className="projectContainer">
                    <img src=""/*images[image]*/ className="projectImage" />
                    <div className="try">
                        <h2><a href=""/*{link}*/ className="projectButton" target="_blank" style={{ backgroundColor: "white"}}>Try it out!</a></h2>
                    </div>
                </div>
                <div className="projectInfo">
                    <h1>Meal Master</h1>
                    <div className = "headerColumns">
                        <div className="features">
                            <h3>Features:</h3>
                            <ul>
                                <li>Recipe Searching</li>
                                <li>Recipe Book</li>
                                <li>Calorie Tracking</li>
                                <li>Meal Planning</li>
                                <li>Social Features</li>
                            </ul>
                        </div>
                        <div className="techUsed">
                            <h3>Tech used:</h3>
                            <ul>
                                <li>Firebase</li>
                                <li>HTML / CSS / JS</li>
                                <li>Git</li>
                                <li>External recipe API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutTorch">
                <h2>About:</h2>
                <p>about here</p>
                <h2>Challenges:</h2>
                <p>challenges here</p>
            </div>
        </>
    )
}