import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import RecipeList from './components/Recipe'
import RecipeId from './components/Recipe_Id'
import Login from './components/Login'
import Register from './components/Register'
import Favorites from './components/Favorites'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <div id="container">
    <h1 className="banner">Welcome to the Recipe Book!</h1>
      <div id="navbar">
        <Link to="/">All Recipes</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/favorites">Favorite Recipes</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeId token={token}/>} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/favorites" element={<Favorites token={token} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
