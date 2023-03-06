import React, { useState } from 'react';
import '../styles/contact';

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
        <div>
            <h1>Contact</h1>
            <form className='form'>
                <label>Name</label>
                <input value={name} name='name' onChange={handleInputChange} type='name' placeholder='name' />
                <label>Email</label>
                <input value={email} name='email' onChange={handleInputChange} type='email' placeholder='email' />
                <label>Message</label>
                <input value={message} name='Message' onChange={handleInputChange} type='Message' placeholder='Message' />

                <button type='button' onClick={handleFormSub}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;