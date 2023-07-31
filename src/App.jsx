import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes, Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'

function App() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(data => {
      console.log(data.data)
      setProducts(data.data)
    })
    .catch(error => console.log(error))
  },[])

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
          {products ? products.map(singleProd => {
            return(
          <li>
          <NavLink
            to={"/profile/"+singleProd.id}  
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
              };
            }}
          >
            {singleProd.title}
          </NavLink>
          </li>)
          })
          :
          <li>Loading products</li>
          }
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
