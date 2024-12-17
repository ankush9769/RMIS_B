import React from 'react';
import { useState, useEffect } from 'react'
import './style/MobileForm.css'

export default function MobileForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiry: '',
        message: ''
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
            inquiry: '',
            message: ''
        });
    };
    return (
        <div className='mobileForm'>
            <div className='container'>
                <div className="emoji">
                    <div className='pokiface'>
                    </div>
                </div>
                <p className='mobileH'>Have questions or ready to start your next big project? We're here to help—reach out today!</p>
                <form>
                    <input className='mobileInput' name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your full name" required />
                    <input className='mobileInput' name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" required />
                    <input className='mobileInput' name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter your phone number" />
                    <input className='mobileInput' name="inquiry" value={formData.inquiry} onChange={handleChange} type="text" placeholder="What's your inquiry about?" />
                    <textarea className='mobileArea' name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Type your message here..." required></textarea>
                    <div className="fbuttons">
                        <button type="reset" className="reset-btn" onClick={handleReset}>RESET</button>
                        <button type="submit" className="submit-btn" onClick={handleSubmit}>SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
