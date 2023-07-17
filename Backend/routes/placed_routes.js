const express=require("express")
const placedController = require("../Controller/placed_controller")
const router=express.Router()

router.get("/",placedController.getAll)
router.post("/:c_id",placedController.getById)
router.post("/",placedController.create)
router.put("/:c_id",placedController.update)
router.delete("/:c_id",placedController.delete)

module.exports=router