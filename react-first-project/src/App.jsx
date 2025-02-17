import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PrimerComponente from './PrimerComponente.jsx'
import CardComponente from './CardComponente.jsx'

function App() {
  return (
   <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link to="/tabla" className="nav-link">Tabla</Link>
                <Link to="/card" className="nav-link">Card</Link>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/tabla" element={<PrimerComponente />} />
        </Routes>
        <Routes>
          <Route path="/card" element={<CardComponente />} />
        </Routes>
        </div>
    </Router>   
  )
}

export default App