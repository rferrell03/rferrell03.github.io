import "./home.css"

export default function Home() {
    return (
        <>
            <div className = "homePageContainer">
                <h1>Welcome to Robert's Portfolio</h1>
                <p>Please check out my projects!</p>
                <div className = "aboutMe">
                    <div className="column">
                        <h2>About Me:</h2>
                        <p>I use this space to show off some of my own personal projects. I believe that every project can be considered a learning experience, even if one isn't as complex as another. As I am still studying, I am branching out into a multitude of different ideas to try and get a footing on what I enjoy doing. This portfiolio showcases a range of personal projects that I have completed. Please check each one out!</p>
                    </div>
                    <div className="column">
                        <h2>Skills</h2>
                        <div className="toolsAndAwards">
                            <div className="toolsColumn">
                                <h3>Languages</h3>
                                <ul>
                                    <li>Typescript</li>
                                    <li>Javascript</li>
                                    <li>Java</li>
                                    <li>C#</li>
                                    <li>Python</li>
                                    <li>HTML / CSS</li>
                                </ul>
                            </div>
                            <div className="toolsColumn">
                                <h3>Tools</h3>
                                <ul>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>Git / Github</li>
                                    <li>Firebase</li>
                                    <li>Unity</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                        <h3>Achievments</h3>
                       <div className="skillsColumn">
                                <ul>
                                    <li>WICS/SSL Hackathon - First Place<span id="date"> April 2023</span></li>
                                    <li>GDC Summer Game Jam – First Place <span id="date"> May 2023 – August 2023</span></li>
                                    <li>SASE 2023 Hackathon - Second Place <span id="date"> October 2023</span></li>
                                    <li>Tiger AI Certification <span id="date">May 2024</span></li>
                                    <li>Deans List <span id="date">August 2022 - Present</span></li>
                                    <li>Google Developer Student Club Officer <span id = "date">August 2023-Present</span></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}