import { useEffect } from "react"
import { useState } from "react";

function Favorites({ token }) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        async function fetchFavorites() {
            try {
                const response = await fetch("https://fsa-recipe.up.railway.app/api/favorites", {
                headers: {
                Authorization: `Bearer ${token}`
            }
            });
            const result = await response.json()
            setFavorites(result)
        }catch(error){
            console.error("Error fetching favorites:", error)
        }
    }

    if (token) {
        fetchFavorites()
    }
}, [token])

    return (
        <div>
            <h2>Your Favorite Recipes</h2>
            <div className="recipe-grid">
                {favorites.map((recipe) => (
                    <div key={recipe.idMeal} className="recipe-card">
                        <h3>{recipe.strMeal}</h3>
                        <img 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal} 
                        className="recipe-image" 
                        />
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites