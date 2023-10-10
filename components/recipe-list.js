import RecipeCard from "./recipe-item";

function RecipeList({ recipes }) {

  return (

    <div className="recipe-list">

      {recipes.map((recipe, index) => (

        <RecipeCard key={index} recipe={recipe} />

      ))}

    </div>

  );
  
}

export default RecipeList;
