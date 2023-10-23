import RecipeCard from "./recipe-item";
import classes from './recipe-list.module.css'

/**
 * The RecipeList function takes in a list of recipes and renders a container div with RecipeCard
 * components for each recipe in the list.
 * @returns a div container that contains multiple RecipeCard components. The RecipeCard components are
 * rendered based on the recipes array that is passed as a prop to the RecipeList component.
 */

function RecipeList({ recipes }) {

  return (

    
      <div className={classes.container}>
       {recipes.map((recipe, index) => (
      
        <RecipeCard key={index} recipe={recipe} />
        
      ))} 
      </div>
      

    
    
  );
}

export default RecipeList;
