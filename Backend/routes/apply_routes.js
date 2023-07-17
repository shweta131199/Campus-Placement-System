const express=require("express")
const applyController = require("../Controller/apply_controller")
const router=express.Router()

router.get("/",applyController.getAll)
router.post("/:c_id",applyController.getById)
router.post("/",applyController.create)
router.put("/:c_id",applyController.update)
router.delete("/:c_id",applyController.delete)

module.exports=router