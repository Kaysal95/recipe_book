import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import RecipeId from './Recipe_Id'


function RecipeList({ token }) {
    const [recipes, setRecipes] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
                const result = await response.json()
                console.log("Fetched recipes:", result)
                setRecipes(
                    result
                    .filter((recipe) => recipe.strMealThumb)
                    .slice(0, 21))
                
            }catch(error){
                console.error("Error fetching recipes:", error)
            }
        }
        async function fetchFavorites() {
            const response = await fetch("https://fsa-recipe.up.railway.app/api/favorites", {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              const result = await response.json()
              setFavorites(result.map(fav => fav.idMeal))
        }
        fetchRecipes()
        fetchFavorites()
    }, [token])

    const handleFavoriteToggle = async (recipeId) => {
        const isFavorite = favorites.includes(recipeId)

        const method = isFavorite ? "DELETE" : "POST"
        const url = "https://fsa-recipe.up.railway.app/api/favorites"

        try {
            await fetch(url, {
                method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ recipeId }),
            })

            setFavorites(prev => 
                isFavorite ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
            )
        }catch(error) {
            console.error("Favorite toggle failed:", error)
        }
    }

    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                    <RecipeId
                      key={recipe.idMeal}
                      recipe={recipe}
                      token={token}
                      isFavorite={favorites.includes(recipe.idMeal)}
                      handleFavoriteToggle={handleFavoriteToggle}
                    />
             ))}
         </div>
    )
}

export default RecipeList