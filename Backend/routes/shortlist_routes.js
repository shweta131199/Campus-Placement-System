const express=require("express")
const shortlistController = require("../Controller/shortlist_controller")
const router=express.Router()

router.get("/",shortlistController.getAll)
router.post("/:c_id",shortlistController.getById)
router.post("/",shortlistController.create)
router.put("/:c_id",shortlistController.update)
router.delete("/:c_id",shortlistController.delete)

module.exports=router