
import './Style/form.css'
import Contactinfo from '../Components/ContactInfo'
import { useState, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import MobileForm from './MobileForm';

const Form = () => {

  const location = useLocation();
  const [timeout, showTimeout] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      anchorPlacement: 'top-bottom'
    });
    Aos.refresh();
    console.log(location);
    setTimeout(() => {
      showTimeout(true);
    }, 1000);
  }, [location]);

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
    <div key={location.pathname} className="contact">
      <Contactinfo></Contactinfo>
      {timeout && <form className='form' data-aos='fade-up'>
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
      </form>}
    </div>
  )
}

export default Form
