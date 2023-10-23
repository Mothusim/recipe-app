import Image from "next/image";
import classes from './recipe-item.module.css'
import Link from "next/link";
import CookingTime from "./ui/cookTime/cookingTime";

/**
 * The RecipeCard function takes in a recipe object as a prop and renders a card component with the
 * recipe's image, title, description, and a button to view the full recipe.
 * @returns The RecipeCard component is returning a JSX element.
 */

function RecipeCard({ recipe }) {

  const recipeTitle = (recipe.title).toUpperCase()

  const description = (recipe.description).slice(0, 51)

  return (

    <div className={classes.card}>

      <div  >
      
        <Image src={recipe.images[0]} width={360} height={200}   alt="card-img-top" />
        
      </div>

      <div className={classes.cardContent}>
          
        <h5 className={classes.title}>{recipeTitle}</h5>

        <p className={classes.cardDescription}>{description}...</p>

        <CookingTime cookTimeInMinutes={recipe.cook} label='Total time' prepTimeInMinutes={recipe.prep} />

        <button className={classes.btn}>

          <Link key={recipe._id} href={`/recipe/${recipe.title}`} className={classes.link}>View Recipe</Link>

        </button>

      </div>

    </div>

  );
  
}

export default RecipeCard;
  