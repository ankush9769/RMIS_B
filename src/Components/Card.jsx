import React from 'react';
import './Style/Card.css';

export default function Card({ icon, title, description, mobileIcon }) {
    return (
        <div className="card">
            <div className="cardIconDiv">
                <div className="cardIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="40px" fill="#EA33F7">
                        <path d={`${icon}`} />
                    </svg>
                </div>
                <div className="cardIconMobile">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#EA33F7">
                        <path d={`${mobileIcon}`} />
                    </svg>
                </div>
            </div>
            <div className="cardDescription">
                <p>{description}</p>
            </div>
            <div className="cardTitle">
                <p>{title}</p>
            </div>
        </div>
    );
}
