import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function RecipeId({ token, isFavorite, handleFavoriteToggle }) {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect (() => {
        async function fetchRecipe() {
        try {
            const response= await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`);
            const result = await response.json();
            setRecipe(result);
          } catch (error) {
            console.error('Failed to fetch recipe:', error);
          }
        }
    
        fetchRecipe();
      }, [id])

      if (!recipe) {
        return <p>Loading recipe...</p>;
      }
   
   
    return (
         <div className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <img 
            className="recipe-image" 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            />
            <p><strong>Category:</strong> {recipe.strCategory}</p>
            <p>{recipe.strInstructions}</p>
            <p>
                <strong>YouTube:</strong>{" "}
                <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
                 Watch Video
                 </a>
            </p>


            {token && (
                <button onClick={() => handleFavoriteToggle(recipe.idMeal)}>
                    {isFavorite ? "Unfavorite" : "Favorite"}
                </button>
            )}
        </div>
    )
}
    


export default RecipeId