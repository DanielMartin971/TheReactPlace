import React from 'react';
import Nav from './Nav';
import '../styles/Nav.css';

function Header () {
    return (
        <div  className='header'>
            <h1>Daniel Martin</h1>
            <Nav />
        </div>
    )
}

export default Header;