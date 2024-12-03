import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Industry from './Pages/Industry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Industry/>
    </>
  )
}

export default App
