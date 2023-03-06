import React from 'react';
import Face from '../assets/imgs/profile.jpg';
import '../styles/About.css';

function About () {
    return (
        <div className='about'>
            <h1>About</h1>
            <img className='face' src={Face} alt='Me'></img>
            <p>My name is Daniel, I love to code! Doing lots of critical thinking and planning! I got into this industry from gaming</p>
            <p>I always wanted to make games; from there I found software engineering and a love for making websites instead!</p>
            <p>I've still made a few games just for fun and show getting myself orientated well with Javascript</p>

            <a className='resume' href='../assets/Resume.pdf'>Download Resume</a>
        </div>
    );
}

export default About;