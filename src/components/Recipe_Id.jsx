import React from "react"
import { Link } from "react-router-dom"

function RecipieId() {
    const RecipeCard = ({recipe}) => {
        return (
            <div>
                <h3>{recipe.name}</h3>
                <Link to={'/recipe/${recipe.id}'}>View Details</Link>
            </div>
        )
    }
    
}

export default RecipieId