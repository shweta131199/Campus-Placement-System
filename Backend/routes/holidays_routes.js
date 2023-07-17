const express=require("express")
const holidayController = require("../Controller/holidays_controller")
const router=express.Router()

router.get("/",holidayController.getAll)
router.get("/:id",holidayController.getById)
router.post("/",holidayController.create)
router.put("/:id",holidayController.update)
router.delete("/:id",holidayController.delete)

module.exports=router