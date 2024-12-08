import React from 'react'
import './Style/form.css'
import Contactinfo from '../Components/ContactInfo'
import { useState } from 'react'



const Form = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          inquiry:'',
          message:''
        });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
      };
      const handleReset = (event) => {
        event.preventDefault();
        setFormData({
            name: '',
            email: '',
            phone: '',
            inquiry:'',
            message:''
        });
      };
    return (
        <div className="contact">
                <Contactinfo></Contactinfo>
                <form className='form'>
                    <p className='headings'>We'd love to hear from you!</p>
                    <input className="input firstinput" name="name" value={formData.name} onChange={handleChange} type="text" placeholder='Enter your full name' />
                    <input className="input" name="email" value={formData.email} onChange={handleChange} type="email" placeholder='Enter your email address' />
                    <input className="input" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder='Enter your phone number' />
                    <input className="input" name="inquiry" value={formData.inquiry} onChange={handleChange} type='text' placeholder="what's your inquiry about?" />
                    <textarea className='textarea' name="message" value={formData.message} onChange={handleChange} placeholder="type your message here..." />
                    <div className="buttondiv">
                        <button className='button1' onClick={handleReset}>R E S E T</button>
                        <button className='button2' onClick={handleSubmit}>S U B M I T</button>
                    </div>
                </form>
        </div>
    )
}

export default Form
