import React from "react";
import './About.css'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
               
            </div>
            <div className="about-sec">
                <div className="ab-left">
                    <img src="/g.jpg" alt="Priti" />
                </div>
                <div className="ab-right">
                    <div className="ab-para">
                        <p>Hi, I'm **Priti**, a passionate **Java Developer** with experience in web development and software engineering. I enjoy building scalable applications and creating interactive user interfaces.</p>
                        <p>I have hands-on experience with **Java, React.js, HTML, CSS, JavaScript, C, and C++**, and I've built several projects, including an **eBook App** and multiple front-end web applications.</p>
                    </div>
                    <div className="ab-skill">
                        <div className="ab-skills">
                            <p>Java</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="ab-skills">
                            <p>React JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="ab-skills">
                            <p>JavaScript</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="ab-skills">
                            <p>HTML & CSS</p><hr style={{ width: "75%" }} />
                        </div>
                        <div className="ab-skills">
                            <p>C & C++</p><hr style={{ width: "65%" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ab-achive">
                <div className="ab-ach">
                    <h1>06+ Months</h1>
                    <p>Internship Experience</p>
                </div>
                <hr></hr>
                <div className="ab-ach">
                    <h1>05+</h1>
                    <p>Completed Projects</p>
                </div>
                <hr></hr>
                <div className="ab-ach">
                    <h1>02+</h1>
                    <p>Live Projects</p>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}
export default About;
