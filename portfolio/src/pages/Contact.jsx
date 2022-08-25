import { useState } from "react"
import { validateEmail } from "../utils/helper"

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue)
            setErrorMessage('')
        } else if (inputType === 'name') {
            setName(inputValue)
            setErrorMessage('')
        } else if (inputType === 'message') {
            setMessage(inputValue)
            setErrorMessage('')
        }
    }

    const handleFocus = (e) => {
        setErrorMessage('')
    }

    const handleBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ((inputType === 'name') && (!inputValue.length)) {
            setErrorMessage('Please enter a name!')
        } else if ((inputType === 'email') && (!inputValue.length)) {
            setErrorMessage('Please enter an email!')
        } else if ((inputType === 'message') && (!inputValue.length)) {
            setErrorMessage('Please enter a message!')
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();


        if (!validateEmail(email)) {
            setErrorMessage('Valid email required')
            return;
        } else if (!name || !email || !message) {
            setErrorMessage('All fields must be filled out!')
            return;
        }
        setEmail('')
        setName('')
        setMessage('')
        setErrorMessage('')
    }

    return (

        <div className="my-24 flex-col flex shadow-lg bg-gradient-to-br from-sky-600 to-indigo-700 rounded-xl w-1/2">
            <h1 className="place-self-center pt-3 text-lg">Contact Me</h1>
            <form className="form flex-col">
                <div className="p-2">
                    <label for='name'>Name:</label>
                    <input className='form-input rounded-lg w-full text-slate-700' value={name} type="text" name="name" placeholder="Enter your name" onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                </div>
                <div className="p-2">
                    <label for='email'>Email:</label>
                    <input className='align-middle form-input rounded-lg w-full text-slate-700' value={email} type="email" name="email" placeholder="Enter an email address" onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                </div>
                <div className="p-2">
                    <label for='message'>Message:</label>
                    <textarea className='form-textarea rounded-lg w-full text-slate-700' value={message} name="message" placeholder="Send me a message" onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                </div>
                {errorMessage && (
                    <div className="pl-3 font-mono text-sm font-bold">{errorMessage}</div>
                )}
                <button className='rounded-lg place-self-center m-2 p-1 bg-indigo-900 text-slate-300' type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>

    )
}

export default Contact