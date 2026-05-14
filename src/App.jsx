import React from 'react'
import Home from './global/pages/home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Fishon from './global/pages/fishon'
import Electronics from './global/pages/Electronics'


const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fishon" element={<Fishon />} />
        <Route path="/Electronics" element={<Electronics />} />
      </Routes>
      </Router>
  )
}

export default App