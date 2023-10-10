import React from 'react';
import { connectDatabase, getAllRecipes } from '@/helpers/db-util';
import RecipeList from '@/components/recipe-list';

function Home({ recipes }) {

  return (

    <div className="home">

      <h1>Recipe List</h1>
      <RecipeList recipes={recipes} />

    </div>

  );

}

export async function getStaticProps() {
  
  const client = await connectDatabase();
  const recipes = await getAllRecipes(client, 'recipes', 10);
  client.close();

  return {
    
    props: { recipes },
    
  };

}

export default Home;

