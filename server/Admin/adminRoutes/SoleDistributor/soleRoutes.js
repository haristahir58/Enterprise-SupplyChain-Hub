const express = require('express');
const router = express.Router();
require('../../../db/conn');
const soleSchema = require('../../model/SoleDistributor/soleSchema')


//For Adding the product we will use router.post
router.post('/admin/users/new', async (req,res)=>{

    const { username, name, email, phone, profession,address,country} = req.body;
    if (!username || !name || !email || !phone || !profession || !address || !country ){
        return res.status(422).json({error: "Please fill the field properties"});
    }
    const sole = new soleSchema({ username, name, email, phone, profession,address,country});
    try{
        const saved = await sole.save();
        res.status(201).json({message:"New Sole Distributor Added successfully"});
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
    
});

//For Getting the all Sole Distributors data we will use router.get
router.get('/admin/users',async(req,res)=>{
    try{
    const sole = await soleSchema.find();
    res.json(sole);
    } catch(err){
      res.status(500).json({message:"Cant Find Sole Distributors"})
    }
  })

  //For Getting Specific Product's data 
router.get('/admin/users/:id', async (req, res) => {
    try {
      const sole = await soleSchema.findOne({ _id: req.params.id });
      if (!sole) {
        return res.status(404).json({ message: "Sole Distributor not found" });
      }
      res.json(sole);
    } catch (err) {
      res.status(500).json({ message: "Can't Sole Distributor" });
    }
  });

  //For Updating Specific product's data with put method
router.put('/admin/users/:id', async (req, res) => {
    try {
      const sole = await soleSchema.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!sole) {
        return res.status(404).json({ message: "Sole Distributor not found" });
      }
      res.json(sole);
    } catch (err) {
      res.status(500).json({ message: "Can't update Sole Distributor" });
    }
  })


  //For Deleting Specific product's data with delete method
router.delete('/admin/users/:id', async (req, res) => {
    try {
      const sole = await soleSchema.findOneAndDelete(
        { _id: req.params.id },
        req.body
      );
      if (!sole) {
        return res.status(404).json({ message: "Sole Distributor not found" });
      }
      res.json(sole);
    } catch (err) {
      res.status(500).json({ message: "Can't Delete Sole Distributor" });
    }
  })



module.exports = router;