const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('../server/db/conn')
// const soleDistributor = require('./model/soleSchema');
const Products = require('./Admin/model/Products/productSchema')
const soleSchema = require('./Admin/model/SoleDistributor/soleSchema')
const disSchema = require('./Sole/Distributors/model/disSchema')
const adminSchema = require('./Admin/model/AdminLogin/adminSchema')

app.use(express.json());

//We link the router files to make our route easy
app.use(require('./Admin/adminRoutes/Products/productRoutes'));
app.use(require('./Admin/adminRoutes/SoleDistributor/soleRoutes'))
app.use(require('./Sole/Distributors/routes/disRoutes'))
app.use('/widget/products', require('./Admin/Widget/widgetRoutes'));
app.use(require('./router/auth'))
app.use(require('./Admin/adminRoutes/AdminLogin/adminLogin'))

const PORT = process.env.PORT;
// const DB = process.env.DATABASE;


//Middleware
const middleware = (req,res,next) =>{
    console.log(`Hello my Middleware`);
    next();
}


app.get('/admin/products',(req,res) =>{
    res.send(`Products`);
});
app.get('/admin/users',(req,res) =>{
    res.send(`Sole Distributors`);
});
// app.get('/widget/products',(req,res) =>{
//     res.send(`Count`);
// });



app.get('/soleDistributor',(req,res) =>{
    res.send(`Hello world from the server`);
});
// app.get('/soleDistributor/signin',(req,res) =>{
//     res.send(`Hello Login world from the server`);
// });

app.get('/soleDistributor/distributors',(req,res) =>{
    res.cookie("Test", "haris");
    res.send(`Hello Distributors from the server`);
});


app.get('/soleDistributor/signup',(req,res) =>{
    res.send(`Hello Signup world from the server`);
});



app.listen(4000, () => {
    console.log(`Server is running at Port No ${PORT}`);
  });
  