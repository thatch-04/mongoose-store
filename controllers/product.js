// Import Product Model
const Product = require("../models/Product")

//Controller Functions

//Index - generates page of all products
const index = async (req, res) => {
    const Products = await Product.find({})
    res.render("products/index", {
        products: Products
    })
}

//Show - generates page of one product
const show = async (req, res) => {
    res.send("show")
}

//New - generates page to create a product
const newProduct = async (req, res) => {
    res.send("new")
}

//Create - creates a product and redirects to index
const create = async (req, res) => {
    res.send("create")
}

//Edit - generates page to edit a product
const edit = async (req, res) => {
    res.send("edit")
}

//Update - updates a product and redirects to index
const update = async (req, res) => {
    res.send("update")
}

//Destroy - Destroys a product
const destroy = async (req, res) => {
    res.send("destroy")
}

//export my controller

module.exports = {
    index,
    show,
    new: newProduct,
    create,
    edit,
    update,
    destroy
}