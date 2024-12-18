import React from "react";
import { useNavigate } from "react-router-dom";
import './style/Circular.css'

const Circular = () => {
  const navigate = useNavigate();

  const items = [
    { name: "Blueprint", path: "/blueprintphase" },
    { name: "Design", path: "/designphase" },
    { name: "Build", path: "/buildphase" },
    { name: "Test", path: "/testphase" },
    { name: "Launch", path: "/launchphase" },
    { name: "Train", path: "/trainphase" },
    { name: "Optimize", path: "/optimizephase" },
    { name: "Discovery", path: "/discoveryphase" },
    { name: "Insights", path: "/insightsphase" },
  ];

  return (
    <div className="cycle-container">
      <div className="circle">
        {items.map((item, index) => (
          <div
            key={index}
            className="circle-item"
            style={{
              transform: `rotate(${(360 / items.length) * index}deg) translate(8em) rotate(-${(360 / items.length) * index}deg)`,
            }}
            onClick={() => navigate(item.path)} 
          >
            {item.name}
          </div>
        ))}
        <div className="hollow-circle">
          <div className="inner-circle">
            <div className="center-text">Approach</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circular;


