const express=require("express")
const postsController = require("../Controller/posts.controller")
const router=express.Router()

router.get("/",postsController.getAll)
router.get("/:id",postsController.getById)
router.post("/",postsController.create)
router.put("/:id",postsController.update)
router.delete("/:id",postsController.delete)

module.exports=router