const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required:true
    },
    tokens:[
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})



// Hashing The Password

adminSchema.pre('save',async function (next){
    console.log("Hi From Inside");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();

});


//Generating Token
adminSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token});
        await this.save();
        return token;
    } catch (err) {   
        console.log(err);
    }
}


// Collection Creation
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;