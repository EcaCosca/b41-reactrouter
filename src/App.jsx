import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import {Route, Routes, Link} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>REACT ROUTER DOM</h1>
      {/* https://www.freecodecamp.org/news/how-to-use-react-router-version-6/ */}
      <div className='nav'>
        <ul>
          {/* LINK    */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
