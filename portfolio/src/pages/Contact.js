import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact () {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputVal = target.value;

        if(inputType === 'name') {
            setName(inputVal);
        } else if(inputType === 'email'){
            setEmail(inputVal);
        } else{
            setMessage(inputVal);
        }
    };

    const handleFormSub = (event) => {
        event.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='form'>
            <h1>Contact</h1>
            <form>
                <label>Name:</label>
                <input value={name} name='name' onChange={handleInputChange} type='name' placeholder='Name' />
                <label>Email:</label>
                <input value={email} name='email' onChange={handleInputChange} type='email' placeholder='Email' />
                <label>Message:</label>
                <input value={message} name='Message' onChange={handleInputChange} type='Message' placeholder='Message' />

                <button type='button' onClick={handleFormSub}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;