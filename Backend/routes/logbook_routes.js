const express=require("express")
const logbooksController = require("../Controller/logbooks_controller")
const router=express.Router()

router.get("/",logbooksController.getAll)
router.get("/:id",logbooksController.getById)


module.exports=router