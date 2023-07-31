import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import {Route, Routes, Link, NavLink, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const navStyle = {
    fontWeight: "bold",
    color: "red"
  }

  const handleClick = () => {
    navigate(-1);
  }

  const goBackHome = () => {
    navigate('/');
  }

  return (
    <>
      <h1>REACT ROUTER DOM</h1>
      {/* https://www.freecodecamp.org/news/how-to-use-react-router-version-6/ */}
      <div className='nav'>
        <ul>
          {/* LINK    */}
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about">About</Link></li> */}
          {/* NAVLINK    */}
          {/* <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li> */}
          <li>
            <NavLink
              to="/"  
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "black",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/profile/123"  
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            Profile 123
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/profile/555"  
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            Profile 555
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/about"  
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            About
          </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:userId' element={<Profile />} />
      </Routes>

      <button onClick={handleClick}>GO BACK</button>
      <br/>
      <button onClick={goBackHome}>GO BACK HOME</button>
    </>
  )
}

export default App
