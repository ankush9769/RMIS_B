import { useState } from 'react'
import './App.css';
import Industry from './Pages/Industry';
import InsightsPhase from './Components/Approach links/desktop/Insights';
import BarGraph from './Components/ApproachInfo';
import Discovery from './Components/Approach links/desktop/Discovery';
import BlueprintPhase from './Components/Approach links/desktop/Blueprint';
import LaunchingPhase from './Components/Approach links/desktop/Launch';
import TrainingPhase from './Components/Approach links/desktop/Train';
import BuildingPhase from './Components/Approach links/desktop/Build';
import DesigningPhase from './Components/Approach links/desktop/Design';
import TestingPhase from './Components/Approach links/desktop/Test';
import OptimizationPhase from './Components/Approach links/desktop/Optimize';
import DiscoveryMobile from './Components/Approach links/mobile/Discovery';
import Insights from './Components/Approach links/mobile/Insights';
import Design from './Components/Approach links/mobile/Design';
import Blueprint from './Components/Approach links/mobile/Blueprint';
import Build from './Components/Approach links/mobile/Build';
import Launch from './Components/Approach links/mobile/Launch';
import Optimize from './Components/Approach links/mobile/Optimize';
import Test from './Components/Approach links/mobile/Test';
import Train from './Components/Approach links/mobile/Train';
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
          <Route path='/' element={<Approach />}></Route>
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
          <Route path='/industry' element={<Industry />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/discoveryphase" element={<DiscoveryMobile />} />
          <Route path="/insightsphase" element={<Insights />} />
          <Route path="/blueprintphase" element={<Blueprint />} />
          <Route path="/designphase" element={<Design />} />
          <Route path="/buildphase" element={<Build />} />
          <Route path="/testphase" element={<Test />} />
          <Route path="/launchphase" element={<Launch />} />
          <Route path="/trainphase" element={<Train />} />
          <Route path="/optimizephase" element={<Optimize />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
