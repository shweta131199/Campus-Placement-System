const express=require("express")
const awardController = require("../Controller/award_controller")
const router=express.Router()

router.get("/",awardController.getAll)
router.get("/:id",awardController.getById)
router.post("/",awardController.create)
router.put("/:id",awardController.update)
router.delete("/:id",awardController.delete)

module.exports=router