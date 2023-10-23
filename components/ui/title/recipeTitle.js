import classes from './recipeTitle.module.css'

/**
 * The function takes a recipe object as a prop and renders the title of the recipe in uppercase.
 * @returns an h1 element with the className "title" and the text content of the recipe title, which
 * has been converted to uppercase.
 */

export default function RecipeTitle({recipe}) {

    const title = (recipe.title).toUpperCase()

    return (

        <h1 className={classes.title}>{title}</h1>

    )
}
