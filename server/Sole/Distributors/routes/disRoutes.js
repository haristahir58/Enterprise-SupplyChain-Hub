const express = require('express');
const router = express.Router();
require('../../../db/conn');
const disSchema = require('../model/disSchema')


//For Adding the distributor we will use router.post
router.post('/soleDistributor/users/new', async (req,res)=>{

    const { username, name, email, phone, profession,address,city} = req.body;
    if (!username || !name || !email || !phone || !profession || !address || !city ){
        return res.status(422).json({error: "Please fill the field properties"});
    }
    const dis = new disSchema({ username, name, email, phone, profession,address,city});
    try{
        const saved = await dis.save();
        res.status(201).json({message:"New Distributor Added successfully"});
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
    
});

//For Getting the all Sole Distributors data we will use router.get
router.get('/soleDistributor/users',async(req,res)=>{
    try{
    const dis = await disSchema.find();
    res.json(dis);
    } catch(err){
      res.status(500).json({message:"Cant Find Distributors"})
    }
  })

  //For Getting Specific Distributor's data 
router.get('/soleDistributor/users/:id', async (req, res) => {
    try {
      const dis = await disSchema.findOne({ _id: req.params.id });
      if (!dis) {
        return res.status(404).json({ message: "Distributor not found" });
      }
      res.json(dis);
    } catch (err) {
      res.status(500).json({ message: "Can't Find Distributor" });
    }
  });

  //For Updating Specific Distributor's data with put method
router.put('/soleDistributor/users/:id', async (req, res) => {
    try {
      const dis = await disSchema.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!dis) {
        return res.status(404).json({ message: "Distributor not found" });
      }
      res.json(dis);
    } catch (err) {
      res.status(500).json({ message: "Can't update Distributor" });
    }
  })


  //For Deleting Specific Distributor's data with delete method
router.delete('/soleDistributor/users/:id', async (req, res) => {
    try {
      const dis = await disSchema.findOneAndDelete(
        { _id: req.params.id },
        req.body
      );
      if (!dis) {
        return res.status(404).json({ message: "Distributor not found" });
      }
      res.json(dis);
    } catch (err) {
      res.status(500).json({ message: "Can't Delete Distributor" });
    }
  })



module.exports = router;