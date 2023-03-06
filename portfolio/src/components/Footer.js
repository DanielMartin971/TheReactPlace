import React from 'react';
import LinkedInIco from '@material-ui/icons/LinkedIn';
import GitHubIco from '@material-ui/icons/GitHub';
import EmailIco from '@material-ui/icons/Email';

function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <LinkedInIco onClick={event => window.location.href='https://www.linkedin.com/in/daniel-martin-6a5381188/'} />
                <GitHubIco onClick={event => window.location.href='https://github.com/DanielMartin971'} />
                <EmailIco onClick={event => window.location.href='mailto:danielMartin971337@gmail.com'} />
            </div>
            <p> &copy; 2023 All Rights Reserved</p>
        </div>
    )
}

export default Footer;