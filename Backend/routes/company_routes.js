const express=require("express")
const companyController = require("../Controller/company_controller")
const router=express.Router()

router.get("/",companyController.getAll)
router.post("/:c_id",companyController.getById)
router.post("/",companyController.create)
router.put("/:c_id",companyController.update)
router.delete("/:c_id",companyController.delete)

module.exports=router