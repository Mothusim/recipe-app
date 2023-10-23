import { connectDatabase, getRecipeDetails, closeDatabase } from '@/helpers/db-util';
import RecipeDetailContent from '@/components/recipe-detail/recipeDetailContent'

/**
 * The RecipeDetailPage component is a Next.js page that displays the details of a recipe and retrieves
 * the recipe data from a server-side API.
 * @returns The RecipeDetailPage component is being returned.
 */

function RecipeDetailPage({ recipe }) {

  return (

    <RecipeDetailContent recipe={recipe} />

  );

}

export async function getServerSideProps(context) {

  const { recipeId } = context.params;

  const client = await connectDatabase();
  const recipe = await getRecipeDetails(recipeId);

  await closeDatabase(client)

  return {

    props: { recipe },

  };

}

export default RecipeDetailPage;
