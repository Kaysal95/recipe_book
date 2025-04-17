import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import RecipieList from './components/Recipe'
import RecipieId from './components/Recipe_Id'
import Login from './components/Login'
import Register from './components/Register'
import Favorites from './components/Favorites'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <div id="container">
    <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/recipe">All Recipies</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/favorites">Favorite Recipies</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/recipe" element={<RecipieList />} />
          <Route path="/recipe/:id" element={<RecipieId />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>


      <Register token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  )
}

export default App
