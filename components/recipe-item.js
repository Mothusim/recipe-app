
function RecipeCard({ recipe }) {

  return (

    <div className="recipe-card">

      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      
    </div>

  );
  
}

export default RecipeCard;
