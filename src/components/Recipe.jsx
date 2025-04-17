import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function RecipieList() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
                const result = await response.json()
                console.log("Fetched recipes:", result)
                setRecipes(result.slice(0, 21))
                
            }catch(error){
                console.error("Error fetching recipes:", error)
            }
        }
        fetchRecipes()
    }, [])

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.idMeal} className="recipe-card">
                <h3>{recipe.strMeal}</h3>
                <img src={recipe.imageUrl} alt={recipe.name} />
                <Link to={`/recipe/${recipe.id}`}>View Details</Link>
              </div>
            ))}
        </div>
    )
}

export default RecipieList