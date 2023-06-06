const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn')
const soleDistributor = require("../model/soleSchema");

router.get('/soleDistributor',(req,res) =>{
    res.send(`Hello world from the server router js`);
});

router.post('/soleDistributor/register', async (req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    // console.log(name);
    // console.log(email);

    if (!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please fill the field properties"});
    }
    
    //Through Promises

    // soleDistributor.findOne({email:email})
    // .then((userExist) => {
    //     if (userExist) {
    //         return res.status(422).json({error: "Email already Exist" });
    //     }

    //     const sole = new soleDistributor({name, email, phone, work, password, cpassword});
    //     sole.save().then(()=>{
    //         res.status(201).json({message: "sole distributor registered successfully" });
    //     }).catch((err) => res.status(500).json({ error: "Failed to registered"}));

    // }).catch(err => { console.log(err); });


//Through Async Await

    try{
    const userExist = await soleDistributor.findOne({email:email});

    if (userExist) {
        return res.status(422).json({error: "Email already Exist" });
    }else if(password != cpassword){
        return res.status(422).json({ error: "password are not matching" });
    }else{
        const sole = new soleDistributor({name, email, phone, work, password, cpassword});
    // const soleRegister = await sole.save();
    await sole.save();

    // console.log(`${sole} Sole Distributor Registered Successfully`);
    // console.log(soleRegister);


    res.status(201).json({message:"user registered successfully"});
    }

    


    // if(soleRegister){
    //     res.status(201).json({message:"Sole Distributor registered successfully"});
    // }
    // else{
    //     res.status(500).json({error: "Failed to register"})
    // }

} catch(err) { 
    console.log(err); 
}

});


    // res.json({message:req.body});
    // res.send("My Register Page")


// Login Route

router.post("/soleDistributor/signin",async (req,res) =>{
    try{
        let token;
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({error:"Please Fill The Data"})
        }

        const soleLogin = await soleDistributor.findOne({email:email});
        
        // console.log(soleLogin);

        if (soleLogin){
            const isMatch = await bcrypt.compare(password, soleLogin.password);

           token = await soleLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials pass"});
            }else{
                res.json({message: "Sole Distributor Signin Successfully"});
            }
         }
         
         else{
                res.status(400).json({error: "Invalid Credentials "});
            }  
       


    } catch (err){
        console.log(err);
    }
});



module.exports = router;