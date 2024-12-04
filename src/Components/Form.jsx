import React from 'react'
import './style/form.css'

const Form = () => {
    return (
        <div className="contact">
                <form className='form'>
                    <p className='heading'>We'd love to hear from you!</p>
                    <input type="text" placeholder='Enter your full name' />
                    <input type="email" placeholder='Enter your email address' />
                    <input type="tel" placeholder='Enter your phone number' />
                    <input type='text' placeholder="what's your inquiry about?" />
                    <textarea placeholder="type your message here..." />
                    <div className="button">
                        <button>RESET</button>
                        <button>SUBMIT</button>
                    </div>
                </form>
        </div>

    )
}

export default Form
