import "./style/Map.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Map() {
  
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
    }, 1600);
  }, [location]);

  return (
    timeout && <div className="main" data-aos="fade-up">
      <p className="description">FIND US HERE!</p>
      <div className="map-container">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7482581863806!2d72.87172257440851!3d19.206194682025327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b738c9e09369%3A0x4be91c068af00f54!2sThakur%20College%20of%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1733314552087!5m2!1sen!2sin"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            border: "0",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
