import CookTime from "../cookTime/timeConversion"
import Servings from "../servings/servings"
import classes from './cookTimeAndServing.module.css'

/**
 * The function CookTimeAndServings takes in a recipe object and a label, and returns a component that
 * displays the cook time and servings for the recipe.
 * @returns a JSX element.
 */

export default function CookTimeAndServings({recipe, label}) {

    const cookTimeInMinutes = recipe.cook
    const prepTimeInMinutes = recipe.prep

  return (

    <div className={classes.cookTimeAndServings}>

        <CookTime cookTimeInMinutes={cookTimeInMinutes} prepTimeInMinutes={prepTimeInMinutes} label={label}/>
        <Servings recipe={recipe} />

    </div>

  )

}
