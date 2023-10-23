import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = process.env.MONGODB_URI

/* The code is creating a MongoDB client instance using the provided MongoDB URI. */
const client = new MongoClient(uri, {

  serverApi: {

    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,

  },

});


/**
 * The function `connectDatabase` connects to a MongoDB database and returns the client object.
 * @returns The `connectDatabase` function returns the `client` object, which represents the connection
 * to the MongoDB database.
 */

export async function connectDatabase() {

  try {

    await client.connect();
    console.log("Connected to MongoDB");
    return client;

  } catch (error) {

    console.error("Error connecting to MongoDB:", error);
    throw error;

  }

}


/**
 * The closeDatabase function is used to close a MongoDB connection and logs the status of the
 * connection.
 * @param client - The `client` parameter is the MongoDB client object that is used to connect to the
 * MongoDB server. It is responsible for establishing and maintaining the connection to the database
 * server.
 */
export async function closeDatabase(client) { 

  try {

    await client.close();
    console.log("Closed MongoDB connection");

  } catch (error) {

    console.error("Error closing MongoDB connection:", error);

  }

}


/**
 * The function `getAllRecipes` retrieves all recipes from a specified collection in a MongoDB
 * database, with an optional limit on the number of recipes to retrieve.
 * @param client - The client parameter is the MongoDB client object that is used to connect to the
 * MongoDB server. It is responsible for establishing and managing the connection to the database.
 * @param collectionName - The name of the collection in the database where the recipes are stored.
 * @param limit - The `limit` parameter is used to specify the maximum number of documents to be
 * returned by the query. It determines the number of recipes that will be retrieved from the database.
 * @returns an array of recipes.
 */

export async function getAllRecipes(client, collectionName, limit) {

  const db = client.db();

  let query = db.collection(collectionName).find();

  query.limit(limit)

  try {

    const recipes = await query.toArray();
    return recipes;

  } catch (error) {

    console.error("Error retrieving recipes:", error);
    throw error;

  }finally{

    await closeDatabase(client)
  }

}


/**
 * The function `getRecipeDetails` retrieves the details of a recipe with a specific ID from a
 * collection of recipes.
 * @param id - The `id` parameter is the unique identifier of the recipe that you want to retrieve the
 * details for.
 * @returns the recipe details for the recipe with the specified id.
 */

export async function getRecipeDetails(id){

  const allRecipes = await getAllRecipes(client, 'recipes_edit', 10)
  return allRecipes.find((recipe) => recipe.title === id);
  
}

/**
 * The function updates a recipe in a MongoDB collection with a new description.
 * @param client - The "client" parameter is the MongoDB client object that is used to connect to the
 * MongoDB server. It is typically created using the MongoClient class.
 * @param collection - The `collection` parameter is the name of the collection in the database where
 * the recipe is stored.
 * @param id - The id parameter is the unique identifier of the recipe that you want to update. It is
 * used to find the specific recipe in the collection.
 * @param data - The "data" parameter is the new value for the "description" field in the recipe
 * document that you want to update.
 * @returns the updated document from the collection.
 */

export async function updateRecipe(client, collection, id, data){

  const db = client.db()

  const collec = db.collection(collection)

  const result  = await collec.findOneAndUpdate(

    {_id: id},
    {$set: {description: data}},
    {returnOriginal:false}

  )

  return result

}

