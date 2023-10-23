import React from 'react';
import { connectDatabase, getAllRecipes } from '@/helpers/db-util';
import RecipeList from '@/components/recipe-list';
import Link from 'next/link';

/**
 * The function `allRecipesPage` is a React component that renders a page displaying all recipes
 * fetched from a database.
 * @returns The function `allRecipesPage` is returning a JSX element.
 */

function allRecipesPage({ recipes }) {

  return (

    <div className="home">

        <Link href='/'>Back home</Link>
        <h1>All Recipes</h1>
        <RecipeList recipes={recipes} />

    </div>

  );

}

export async function getStaticProps() {

  const client = await connectDatabase();
  const recipes = await getAllRecipes(client, 'recipes_edit', 20);
  client.close();
  
  return {
    
    props: { recipes },
    
  };

}

export default allRecipesPage;

