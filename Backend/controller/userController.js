// const Users = require("../models/userModel");
// All req and res from frontend
// service CRUD operation to our database
// router then contoller and then service then database

const UserService = require('../services/userServices');

exports.register = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        const successRes = await UserService.registerUser(email,password);
        res.json({status:true,success:"User Registered Successfully"})
    }
    catch(err){

    }
}