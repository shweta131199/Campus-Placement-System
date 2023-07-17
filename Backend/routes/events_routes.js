const express=require("express")
const eventController = require("../Controller/events_controller")
const router=express.Router()

router.get("/",eventController.getAll)
router.get("/:id",eventController.getById)
router.post("/",eventController.create)
router.put("/:id",eventController.update)
router.delete("/:id",eventController.delete)

module.exports=router