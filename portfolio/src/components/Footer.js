import React from 'react';
import LinkedInIco from '@material-ui/icons/LinkedIn';
import GitHubIco from '@material-ui/icons/GitHub';
import EmailIco from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <LinkedInIco className='linked' onClick={event => window.location.href='https://www.linkedin.com/in/daniel-martin-6a5381188/'} />
                <GitHubIco className='gitH' onClick={event => window.location.href='https://github.com/DanielMartin971'} />
                <EmailIco className='email' onClick={event => window.location.href='mailto:danielMartin971337@gmail.com'} />
            </div>
            <p> &copy; 2023 All Rights Reserved</p>
        </div>
    )
}

export default Footer;