import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style/ApproachInfo.css';


function BarGraph() {

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

  const navigate = useNavigate();

  return (
    <div className="graph" key={location.pathname} data-aos='fade-up'>
      <div
        className="bar bar1"
        style={{ height: '20%' ,width: '7em' }}
        onClick={() => navigate('/discovery')}
      >
        <span className="text">Discovery</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar2"
        style={{ height: '30%',width:'7em' }}
        onClick={() => navigate('/insights')}
      >
        <span className="text">Insights</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar3"
        style={{ height: '40%',width:'7em' }}
        onClick={() => navigate('/blueprint')}
      >
        <span className="text">Blueprint</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar4"
        style={{ height: '50%',width:'7em' }}
        onClick={() => navigate('/design')}
      >
        <span className="text">Design</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar5"
        style={{ height: '60%',width:'7em'}}
        onClick={() => navigate('/build')}
      >
        <span className="text">Build</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar6"
        style={{ height: '70%',width:'7em' }}
        onClick={() => navigate('/test')}
      >
        <span className="text">Test</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar7"
        style={{ height: '80%',width:'7em' }}
        onClick={() => navigate('/launch')}
      >
        <span className="text">Launch</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar8"
        style={{ height: '90%',width:'7em' }}
        onClick={() => navigate('/train')}
      >
        <span className="text">Train</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
      <div
        className="bar bar9"
        style={{ height: '100%',width:'7em' }}
        onClick={() => navigate('/optimize')}
      >
        <span className="text">Optimize</span>
        <div className="pole">
          <div className="flag"></div>
        </div>
      </div>
    </div>
  );
}

export default BarGraph;