const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../../../db/conn');
const adminSchema = require('../../model/AdminLogin/adminSchema');

router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please fill in all the required fields' });
    }

    let adminLogin = await adminSchema.findOne({ email: email });

    if (adminLogin) {
      return res.status(422).json({ error: 'Email already exists' });
    } else {
      adminLogin = new adminSchema({ email, password });
      await adminLogin.save();
      res.status(201).json({ message: 'Admin registered successfully' });
    }

    const token = await adminLogin.generateAuthToken();
    console.log(token);

    res.cookie('jwtoken', token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true
    });

    const isMatch = await bcrypt.compare(password, adminLogin.password);

    if (!isMatch) {
      res.status(400).json({ error: 'Invalid credentials' });
    } else {
      res.json({ message: 'Admin signed in successfully' });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
