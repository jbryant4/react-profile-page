import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
 
    container: {
        display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '15px 0',
        width: 375,
        height: 500
    },
});

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');
    
    const classes = useStyles();

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1 data-testid='h1tag'>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} className={classes.container}>

                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />

                <label htmlFor="email">Reply Email Address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />

                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact