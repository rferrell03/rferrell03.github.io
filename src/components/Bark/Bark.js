import React from "react";
import './bark.css';
import logo from "./barkLogo.png"
export default function Bark() {
    return (
        <>
        <div className="barkContainer"> 
            <h1 className="title">Bark</h1>    
            <img src={logo} className="barkImg" />
        </div>

        <div className = "details">
            <div className="projectDescriptionContainer">
                <div className="projectDescription">
                    <h2>About</h2>
                    <p>Bark is an app that addresses a mostly forgotten part about dog care; social interaction! With Bark, you can connect to other pet owners with ease. Then, hit up the local park and have fun playing with your pet and your new friend!</p>
                </div>
                <div className="techUsed">
                    <ul>
                        <li>React Native</li>
                        <li>Firebase</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>

            <div className="whatWasLearned">
                <h2>What I took away</h2>
                <ul>
                    <li>React Native</li>
                    <li>Firebase</li>
                    <li>Figma</li>
                    <li>Git / git branching</li>
                </ul>
            </div>

            <div className="try">
                <h2><a href = "https://github.com/CSC-3380-Spring-2024/bark" className = "projectButton" target="_blank">Try it out!</a></h2>
            </div>
        </div>
        </>
    )
}