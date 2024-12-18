import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarGraph from '../Components/ApproachInfo';
import InsightsPhase from '../Components/Insights';
import Discovery from '../Components/Discovery';
import BlueprintPhase from '../Components/Approach links/desktop/Blueprint';
import LaunchingPhase from '../Components/Launch';
import TrainingPhase from '../Components/Train';
import BuildingPhase from '../Components/Approach links/desktop/Build';
import DesigningPhase from '../Components/Design';
import TestingPhase from '../Components/Test';
import OptimizationPhase from '../Components/Optimize';
import Circular from '../Components/Circular';
import './Style/Approach.css'

// import './App.css';

export default function Approach() {
  return(
    <>
    <div className='approachdesktop'>
      <BarGraph/>
    </div>
    <div className='approachmobile'>
      <Circular/>
    </div>
    </>

  )
}



