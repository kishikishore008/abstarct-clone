import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
      
    </>
  )
}

export default App
