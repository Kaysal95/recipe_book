import { Link } from "react-router-dom";

function RecipeCard({ recipe, token, isFavorite, handleFavoriteToggle }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.strMeal}</h3>
      <img 
        className="recipe-image" 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
      />
      <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>

      {token && (
        <button onClick={() => handleFavoriteToggle(recipe.idMeal)}>
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      )}
    </div>
  );
}

export default RecipeCard;