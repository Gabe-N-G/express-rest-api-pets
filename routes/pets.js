//this is all in controllers in the lesson, RAUL SPECIAL
import { Router } from "express";
import * as controllers from "../controllers/pets.js"
const router = Router()

//routes go here
// router.get("/", (req,res)=>{}) Normal method.
// raul seperates into two blocks
// logic is in another file, controller.

router.get("/", controllers.getPets)
router.get("/:petId", controllers.getPet)
router.post("/", controllers.createPet)
router.put("/:petId", controllers.updatePet)
router.delete("/:petId", controllers.deletePet)





export default router