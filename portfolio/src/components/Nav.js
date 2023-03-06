import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav () {
    
    return (
            <div className='links'>
                <Link to='/'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/projects'>Projects</Link>
            </div>
    )
}

export default Nav;