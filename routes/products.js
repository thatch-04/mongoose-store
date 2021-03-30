//import Router and Controllers
const router = require("express").Router()
const ProductController = require("../controllers/product")

//index get => "/products"
router.get("/", ProductController.index)

//new get => "/products/new"
router.get("/new", ProductController.new)

//create post => "/products"
router.post("/", ProductController.create)

//edit get => "/products/:id/edit"
router.get("/:id/edit", ProductController.edit)

//update put => "/products"
router.put("/:id", ProductController.update)

//destroy delete => "/products/:id"
router.delete("/:id", ProductController.destroy)

//remove 1 qty 
router.get("/purchase/:id", ProductController.purchase)

//show get => "/products/:id"
router.get("/:id", ProductController.show)

//export the router

module.exports = router