const express = require('express');
const router = express.Router();
require('../../../db/conn');
const Products = require('../../model/Products/productSchema')



//For Adding the product we will use router.post
router.post('/admin/products/new', async (req,res)=>{

    const { title, description, category, price, stock} = req.body;
    if (!title || !description || !category || !price || !stock  ){
        return res.status(422).json({error: "Please fill the field properties"});
    }
    const product = new Products({ title, description, category, price, stock});
    try{
        const savedProduct = await product.save();
        res.status(201).json({message:"Product Added successfully"});
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
    
});


//For Getting the all products data we will use router.get
router.get('/admin/products',async(req,res)=>{
    try{
    const product = await Products.find();
    res.json(product);
    } catch(err){
      res.status(500).json({message:"Cant Find Products"})
    }
  })

  //For Getting Specific Product's data 
router.get('/admin/products/:id', async (req, res) => {
    try {
      const product = await Products.findOne({ _id: req.params.id });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: "Can't find Products" });
    }
  });

  //For Updating Specific product's data with put method
router.put('/admin/products/:id', async (req, res) => {
    try {
      const product = await Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: "Can't update Product" });
    }
  })


  //For Deleting Specific product's data with delete method
router.delete('/admin/products/:id', async (req, res) => {
    try {
      const product = await Products.findOneAndDelete(
        { _id: req.params.id },
        req.body
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: "Can't Delete product" });
    }
  })





module.exports = router;