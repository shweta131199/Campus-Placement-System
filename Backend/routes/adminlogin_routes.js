const express=require("express")
const adminloginController = require("../Controller/adminlogin_controller")
const router=express.Router()

router.get("/",adminloginController.getAll)
router.get("/:id",adminloginController.getById)
router.post("/",adminloginController.create)
router.put("/:id",adminloginController.update)
router.delete("/:id",adminloginController.delete)

module.exports=router