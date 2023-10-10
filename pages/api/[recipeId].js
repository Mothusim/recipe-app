import { connectDatabase, getAllRecipes } from "@/helpers/db-util";

export default async function handler(req, res) {

    const recipeId = req.query.eventId

    let client;

    try {

        client = await connectDatabase()

    } catch(error){

        res.status(500).json({message: 'Connecting to the database failed!'})

        return

    }

    

    if(req.method === 'GET'){

        try {

            const recipes = await getAllRecipes(client, 'recipes', {_id: -1}, 10)

            res.status(200).json({recipes: recipes})
            
        } catch(error){

            res.status(500).json({message: 'Getting comments failed!'})

        }

    }

    client.close()

}
