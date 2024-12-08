import React from 'react';
import './style/Contact.css';


function ContactInfo() {
  return (
<div className="contact-details-card">
    <h2 className="heading">Let’s Connect and Create Something Exceptional</h2>
    <p className="para">
         Have questions or ready to start your next big project? We’re here to help—reach out today!
    </p>
     <div className="contact-container">
        <div className="contact-details">
            <div className="detail">
                <img src="Whatsapp.svg" alt="WhatsApp" className="icon" />
                <a href="https://chat.whatsapp.com/BeyBKzccK0BCWVmfCxel2a" target="_blank" className="cLink whatsapp-link">
                    XXXXX-XX-XXXX
                </a>
            </div>
            <div className="detail">
                <img src="Instagram.svg" alt="Instagram" className="icon" />
                <a href="https://www.instagram.com/ratnamaceits/profilecard/?igsh=MXFqamV0aWRtbTlkcA%3D%3D" target="_blank" className="cLink instagram-link">
                 @------------------
                </a>
            </div>
            <div className="detail">
                 <img src="facebook.svg" alt="Facebook" className="icon" />
                <a href="" className='cLink' >@------------------</a>
            </div>
            <div className="detail">
                <img src="youtube.svg" alt="YouTube" className="icon" />
                <a href="https://youtube.com/@ratnamaceitsolutions?si=e5NCla5FVZzcaaMV" className='cLink'>
                @--------------------
                </a>
            </div>
            <div className="detail">
                <img src="Twitter.svg" alt="Twitter" className="icon" />
                <a href="https://x.com/RatnaMaceITS?t=zciPKp55Q7iZkTl5bmoiUA&s=09" className='cLink'>
                @------------------
                </a>
            </div>
            <div className="detail">
                <img src="Threads.svg" alt="Threads" className="icon" />
                <a href="https://www.threads.net/@ratnamaceits" className='cLink'>
                 @------------------
                </a>
            </div>
        </div>
    </div>
</div>

   
  )
}

export default ContactInfo
