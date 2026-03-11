const express = require("express")
const router = express.Router()

const Product = require("../models/product.js")

// GET all products
router.get("/", async (req,res)=>{

try{

const products = await Product.find()

res.json(products)

}catch(err){

res.status(500).json({error:"Server error"})

}

})


// POST add product
router.post("/", async (req,res)=>{

try{

const product = new Product(req.body)

await product.save()

res.json(product)

}catch(err){

res.status(500).json({error:"Failed to add product"})

}

})

module.exports = router
