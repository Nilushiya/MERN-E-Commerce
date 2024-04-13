// const Users = require("../models/userModel");
// All req and res from frontend
// service CRUD operation to our database
// router then contoller and then service then database
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../model/user");
const UserService = require('../services/userServices');

const JWT_SECRET = "sforgmthmgbvd{bbb()cbfghfaskeavfhityoweuervngg2438cmu593?{}dfgfb[]dfgfb58vi493v";

exports.register = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        const olderUser =await userModel.findOne({email});
            if(olderUser){
                return res.json({error:"User Exists"});
            }
        const encryptedPassword = await bcrypt.hash(password,10); 
        const successRes = await UserService.registerUser(email,encryptedPassword);
        return res.json({status:true,success:"User Registered Successfully"})
    }
    catch(err){
        console.error(err);
       return res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.login = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        const user =await userModel.findOne({email});
            if(!user){
                return res.json({error:"User Not Found"});
            }
            if(await bcrypt.compare(password,userModel.password)){
                const token = jwt.sign({email:user.email}, JWT_SECRET);

                if(res.status(201)){
                  return res.json({status: "ok" , data: token});
                }
                else{
                    return res.json({error:"error"});
                }
            }
        // const successRes = await UserService.registerUser(email,encryptedPassword);
        return res.json({status:"error",error:"Invalid Password"});
    }
    catch(err){
        console.error(err);
       return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.userData = async(req,res) => {
    const {token} = req.body;
    try{
        const user = jwt.verify(token , JWT_SECRET);
        const email = user.email;
        userModel.findOne({email:email})
        .then((data) => {
            res.json({status:"ok", data: data});
        })
        .catch((error) => {
            res.json({status: "error" , data: error});
        });
    } 
    catch(err){}
}