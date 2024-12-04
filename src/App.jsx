import { useState } from 'react'
import './App.css';
import Industry from './Pages/Industry';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Approach from './Pages/Approach';
import Contact from './Pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Approach/>}></Route>
        <Route path='/industry' element={<Industry/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
