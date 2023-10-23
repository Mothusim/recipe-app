import React from 'react';
import { connectDatabase, getAllRecipes } from '@/helpers/db-util';
import RecipeList from '@/components/recipe-list';
import Link from 'next/link';

/**
 * The Home component is a React component that displays recommended recipes and fetches the data from
 * a database using the getStaticProps function.
 * @returns The Home component is being returned.
 */

function Home({ recipes }) {

  return (

    <div className="home">

      <Link href='/recipe'>Browse All recipes</Link>

      <h1>Recommended recipes</h1>
      <RecipeList recipes={recipes} />

    </div>

  );

}

export async function getStaticProps() {

  const client = await connectDatabase();
  const recipes = await getAllRecipes(client, 'recipes_edit', 10);
  client.close();
  
  return {
    
    props: { recipes },
    
  };

}

export default Home;

