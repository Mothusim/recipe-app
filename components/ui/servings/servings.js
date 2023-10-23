import classes from './servings.module.css'
import { FaUtensilSpoon } from 'react-icons/fa'

/**
 * This is a JavaScript function that renders the number of servings for a recipe.
 * @returns a JSX element.
 */

export default function Servings({recipe}) {

  return (

    <div className={classes.servings}>

        <FaUtensilSpoon className={classes.servingsIcon}/>
        <h4 style={{ marginLeft: '10px' }}><b>Servings:</b> {recipe.servings}</h4>

    </div>

  )

}
