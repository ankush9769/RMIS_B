import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarGraph from '../Components/ApproachInfo';
import InsightsPhase from '../Components/Insights';
import Discovery from '../Components/Discovery';
import BlueprintPhase from '../Components/Blueprint';
import LaunchingPhase from '../Components/Launch';
import TrainingPhase from '../Components/Train';
import BuildingPhase from '../Components/Build';
import DesigningPhase from '../Components/Design';
import TestingPhase from '../Components/Test';
import OptimizationPhase from '../Components/Optimize';

// import './App.css';

export default function Approach() {
  return(
    <div>
      <BarGraph/>
    </div>

  )
}



