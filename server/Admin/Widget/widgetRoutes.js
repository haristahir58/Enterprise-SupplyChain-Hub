const express = require('express');
const router = express.Router();
const Products = require('../../Admin/model/Products/productSchema');
const SoleUsers = require('../../Admin/model/SoleDistributor/soleSchema');

router.get('/', async (req, res) => {
  try {
    const productCount = await Products.countDocuments({});
    res.json({ count: productCount });
  } catch (error) {
    res.status(500).json({ message: "Can't find product count", error });
  }
});

router.get('/', async (req, res) => {
  try {
    const soleCount = await SoleUsers.countDocuments({});
    res.json({ count: soleCount });
  } catch (error) {
    res.status(500).json({ message: "Can't find sole distributor count", error });
  }
});

module.exports = router;
