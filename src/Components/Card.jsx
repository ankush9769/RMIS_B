import React, { useEffect } from 'react';
import './Style/Card.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

export default function Card({ icon, title, description, mobileIcon }) {

    const location = useLocation();

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
      }, [location]);

    return (
        <div key={location.pathname} className="card" data-aos='fade-up'>
            <div className="cardIconDiv">
                <div className="cardIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="40px" fill="#EA33F7">
                        <path d={`${icon}`} />
                    </svg>
                </div>
                <div className="cardIconMobile">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#EA33F7">
                        <path d={`${mobileIcon}`} />
                    </svg>
                </div>
            </div>
            <div className="cardDescription">
                <p className="cardTitleMobile">{title}</p>
                <p>{description}</p>
            </div>
            <div className="cardTitle">
                <p>{title}</p>
            </div>
        </div>
    );
}
