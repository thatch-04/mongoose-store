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

//Show - generates page of one product "product/:id"
const show = async (req, res) => {
    //get id param
    const id = req.params.id
    //get a product
    const product = await Product.findById(id)
    //render a view
    res.render("products/show", {
        product
    })

}

//New - generates page to create a product
const newProduct = async (req, res) => {
    res.render("products/new")
}

//Create - creates a product and redirects to index
const create = async (req, res) => {
    //create new product
    await Product.create(req.body)
    //redirect to main page
    res.redirect("/product")
}

//Edit - generates page to edit a product "product/:id/edit"
const edit = async (req, res) => {
    //get the id param
    const id = req.params.id
    //get a product
    const product = await Product.findById(id)
    //render a view
    res.render("products/edit", {
        product
    })
}

//Update - updates a product and redirects to index "/product/:id"
const update = async (req, res) => {
    //grab id from params
    const id = req.params.id
    //update product
    await Product.findByIdAndUpdate(id, req.body, {new: true})
    //redirect to show page
    res.redirect(`/product/${id}`)
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