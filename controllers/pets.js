//logic of the routes here, RAUL VERSION
import Pet from "../models/pet.js" 

export const getPets = (req,res) => {  
    //logic goes here
    console.log("Get all pets")
}

export const getPet = (req, res) => {
  
}



/*
CRUD Action: CREATE
Method: POST
Path: /pets
Response: JSON
Success Status Code: 201 Created
Success Response Body: A new Pet object
Error Status Code: 500 Internal Server Error
Error Response Body: A JSON object with an error key and a message describing the error
*/

export const createPet = async (req,res) => {
    try{
       const createdPet = await Pet.create(req.body)
       res.status(201).json(createdPet) //201 not necessary but nice.

    }catch (err){
        console.log(err)
        res.status(500).json({err: err.message})
    }
}