import React from 'react';
import Project from '../components/Projects';
import '../styles/Projects';

import BasicQuest from '../assets/imgs/basicQuest';
import RockOn from '../assets/imgs/rockOn';
import RedonePort from '../assets/imgs/redonePort';
import Skaro from '../assets/imgs/Skaro';

const projects = [
    {
        name: 'Rock On',
        img: RockOn,
        alt: 'Concert App',
        link: 'https://danielmartin971.github.io/Empty-Orchestra/',
        GitHub: 'https://github.com/DanielMartin971/Empty-Orchestra'
    },
    {
        name: 'Basic Quest',
        img: BasicQuest,
        alt: 'Web App Game',
        link: 'https://danielmartin971.github.io/Redone-Portfolio/assets/js/Games/Basic%20Quest/views/main.html',
        GitHub: 'https://github.com/DanielMartin971/Redone-Portfolio/tree/main/assets/js/Games/Basic%20Quest'
    },
    {
        name: 'Redone Portfolio',
        img: RedonePort,
        alt: 'Portfolio with Javascript',
        link: 'https://danielmartin971.github.io/Redone-Portfolio/',
        GitHub: 'https://github.com/DanielMartin971/Redone-Portfolio'
    },
    {
        name: 'Skaro',
        img: Skaro,
        alt: 'Login Page',
        link: 'https://mpe.herokuapp.com/login',
        GitHub: 'https://github.com/DanielMartin971/Skaro'
    }
]


function Projects () {
    return (
        <div>
            {projects.map(project => 
                <Project 
                    name={project.name} 
                    img={project.img} 
                    alt={project.alt} 
                    link={project.link} 
                    GitHub={project.GitHub} 
                />
            )}
        </div>
    )
}

export default Projects;