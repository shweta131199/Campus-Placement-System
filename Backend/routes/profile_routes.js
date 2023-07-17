const express=require("express")
const profileController = require("../Controller/profile_controller")
const router=express.Router()

router.get("/",profileController.getAll)
router.post("/:profile_id",profileController.getById)
router.post("/",profileController.create)
router.put("/:profile_id",profileController.update)
router.delete("/:profile_id",profileController.delete)

module.exports=router