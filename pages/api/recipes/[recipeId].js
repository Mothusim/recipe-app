import { connectDatabase, updateRecipe, closeDatabase } from "@/helpers/db-util";

/**
 * This is an async function that handles a PUT request to update the description of a recipe in a
 * database.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request method, headers, and body. It is used to retrieve data from the
 * request, such as the `newDescription` and `recipeId` values.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It has methods like `status()` to set the status code of the response, `json()` to send
 * a JSON response, and `send()` to send a plain text response. In this code
 */

export default async function handler(req, res) {

  if (req.method == 'PUT') {

    const { newDescription } = req.body;

    const recipeId = req.query.recipeId
    let client;
    
    try {

      client = await connectDatabase();
    
      const result = await updateRecipe(client, 'recipes_edit', recipeId, newDescription)

      res.status(200).json({ message: 'Description updated successfully' });

    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });

    } finally {

      await closeDatabase(client)

    }

  } else {

    res.status(405).json({ message: 'Method not allowed' });

  }

}
