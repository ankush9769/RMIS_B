import { useState } from 'react'
import './App.css';
import Industry from './Pages/Industry';
import InsightsPhase from './Components/Insights';
import BarGraph from './Components/ApproachInfo';
import Discovery from './Components/Discovery';
import BlueprintPhase from './Components/Blueprint';
import LaunchingPhase from './Components/Launch';
import TrainingPhase from './Components/Train';
import BuildingPhase from './Components/Build';
import DesigningPhase from './Components/Design';
import TestingPhase from './Components/Test';
import OptimizationPhase from './Components/Optimize';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Approach from './Pages/Approach';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Approach/>}></Route>
        <Route path="/BarGraph" element={<BarGraph />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/insights" element={<InsightsPhase />} />
        <Route path="/blueprint" element={<BlueprintPhase />} />
        <Route path="/design" element={<DesigningPhase />} />
        <Route path="/build" element={<BuildingPhase />} />
        <Route path="/test" element={<TestingPhase />} />
        <Route path="/launch" element={<LaunchingPhase />} />
        <Route path="/train" element={<TrainingPhase />} />
        <Route path="/optimize" element={<OptimizationPhase />} />
        <Route path='/industry' element={<Industry/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
