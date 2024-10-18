// seed file
import db from "../db/connection"
import Pet from "../models/pet.js"

const insertData = async () => {
    await db.dropDatabase() //DELETES ALL ITEMS IN DATABASE!!!! 
    const pets = [
        {
            name: "Lucky",
            age: 11,
            breed: "Iguana",
          },
          {
            name: "Raul",
            age: 38,
            breed: "Dinosaur",
          },
          {
            name: "Joey",
            age: 40,
            breed: "Native New Yorker",
          },
    ]
    await Pet.create(pets);
    console.log("The pets have entered the building")
    await db.close(); //Closes connection to mongo
}

insertData()