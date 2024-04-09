const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
       email:{
        type:String,
        lowercase:true,
        required: true,
        unique:true
       },
       password:{
        type:String,
        require:true
       }
    })
    // userSchema.pre('save', async function(next) {
    //     try {
    //         var user = this;
    //         const salt = await bcrypt.genSalt(10);
    //         const hashpass = await bcrypt.hash(user.password, salt);
    //         user.password = hashpass; 
    //         next(); 
    //     } catch (error) {
    //         next(error); 
    //     }
    // });
    
    const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;