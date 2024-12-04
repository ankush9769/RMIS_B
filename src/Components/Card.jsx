import React from 'react';
import './style/Card.css';

export default function Card() {
    return (
        <div className='card'>
            <div className="cardIconDiv">
            <div className="cardIcon">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EA33F7"><path d="M446.67-280h66.66v-166.67H680v-66.66H513.33V-680h-66.66v166.67H280v66.66h166.67V-280Zm-260 160q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
            </div>
            </div>
            <div className="cardDescription">
                <p>Streamlining patient care with advanced IT solutions</p>
            </div>
            <div className="cardTitle">
                <p>Healthcare</p>
            </div>
        </div>
    )
}