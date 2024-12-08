import React from 'react';
import './Style/Card.css';

export default function Card({icon, title, description}) {
    return (
        <div className='card'>
            <div className="cardIconDiv">
            <div className="cardIcon">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA33F7"><path d={`${icon}`}/></svg>
            </div>
            </div>
            <div className="cardDescription">
                <p>{description}</p>
            </div>
            <div className="cardTitle">
                <p>{title}</p>
            </div>
        </div>
    )
}
