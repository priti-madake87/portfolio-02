import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='about' className='hero'>
            <img src='/g.jpg' className='img' alt="Priti" />

            <h1><span>I am Priti,</span> a Java Developer<br></br> passionate about coding.</h1> 
            <p>I specialize in **Java Development, Web Development, and Full-Stack Projects**. I have experience in **React.js, HTML, CSS, JavaScript, and Java**, and I love solving problems through coding.</p>
                
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anker-li" offset={50} href="#contact">Connect With Me</AnchorLink>
                </div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
}

export default Hero;
