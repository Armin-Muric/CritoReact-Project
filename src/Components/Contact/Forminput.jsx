import React from 'react'
import { useState } from 'react'

const Forminput = () => {

    const [name, setName] = useState ('')
    const [nameError, setNameError] = useState ('');
    const [email, setEmail] = useState ('')
    const [epostError, setEpostError] = useState ('');
    const [message, setMessage] = useState ('')
    const [messageError, setMessageError] = useState ('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName (value);
        if (value.length < 2) {
            setNameError ('Name must be at least 2 characters long');
        } else {
            setNameError('');
        }

    };


    const handleEpostChange = (e) => {
        const value = e.target.value;
        setEmail (value);
        if (!value.includes ('@')) {
            setEpostError ('Email must contain @')
        } else {
            setEpostError ('');
        }
        

    };


    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage (value);
        if (value.length <10) {
            setMessageError ('Message must be at least 10 characters')
        } else{
            setMessageError ('');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessageError ('')

        const user = {name, email, message}
        const json = JSON.stringify (user)
        
        const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        
        switch (result.status){
            case 201:
                clearForm()
                alert('Ditt meddelande har skickats iväg!')
                break;
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
    <section className="Forminput">
        <div className="container">
            <div className="form_title">
                <h2>Leave us a message for any information.</h2>
                <p className="error-message">{messageError}</p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form_group">
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                    {nameError && <div className="error"> {nameError} </div>}
                </div>
                <div className="form_group">
                    <input type="email" placeholder="Email" value={email} onChange={handleEpostChange} />
                    {epostError && <div className="error">{epostError}</div>}
                </div>
                <div className="form_group">
                    <input type="message" placeholder="Write your message here" value={message} onChange={handleMessageChange} />
                    {messageError && <div className="error">{messageError}</div>}
                </div>
            </form>
            <div className="send_message">
                <button className="btn-login" type="Submit" >Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}
export default Forminput 