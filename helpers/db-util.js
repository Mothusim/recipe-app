import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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


export async function closeDatabase(mongoClient) { 

  try {

    await mongoClient.close();
    console.log("Closed MongoDB connection");

  } catch (error) {

    console.error("Error closing MongoDB connection:", error);

  }

}


export async function getAllRecipes(client, collectionName, limit) {
  const db = client.db();

  let query = db.collection(collectionName).find();

  // if (Object.keys(sort).length > 0) {
  //   query = query.sort(sort).limit(limit);
  // }

  query.limit(limit)

  // if (limit > 0) {
  //   query = query.limit(limit);
  // }

  try {

    const recipes = await query.toArray();
    return recipes;

  } catch (error) {

    console.error("Error retrieving recipes:", error);
    throw error;

  }

}
