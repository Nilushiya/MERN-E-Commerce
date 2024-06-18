// const Users = require("../models/userModel");
// All req and res from frontend
// service CRUD operation to our database
// router then contoller and then service then database
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../model/user");
// const UserService = require('../services/userServices');

// const JWT_SECRET = "sforgmthmgbvd{bbb()cbfghfaskeavfhityoweuervngg2438cmu593?{}dfgfb[]dfgfb58vi493v";

exports.register = async(req,res,next) => {
    try{
        const {name,email,password} = req.body;
        const olderUser =await userModel.findOne({email});
            if(olderUser){
                return res.json({success:false,error:"User Exists"});
            }
            let cart = {};
            for (let i = 0; i < 300 ; i++){
                cart[i]=0;
            }
         
        const encryptedPassword = await bcrypt.hash(password,10); 

        // const successRes = await UserService.registerUser(name,email,encryptedPassword);
        const createrUser = new userModel({name,email,password:encryptedPassword,cartData:cart});
        await createrUser.save();

        const data ={
            createrUser:{
                id:createrUser._id
            }
        }
        const token = jwt.sign(data,'secret_ecom')
        return res.json({success:true,token})
    }
    catch(err){
        console.error(err);
       return res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.login = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        console.log(req.body.email);
        const user =await userModel.findOne({email});
            if(!user){
                return res.json({error:"User Not Found"});
            }
            if(await bcrypt.compare(password,user.password)){
                const data ={
                    user:{
                        id:user._id
                    }
                }
                const token = jwt.sign(data,'secret_ecom')
                return res.json({success:true,token})
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

const fetctUser = async(req,res) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).json({error:"Please authenticate using valite token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }
        catch(error){
            res.status(401).json({error:"Please authenticate valite token"})
        }
    }
}
exports.addtocart = async(req,res) => {
    console.log("Added ",req.body.itemId);
    let userData = await userModel.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await userModel.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json("Added");
}

// exports.removetocart = async(req,res) => {
//     console.log("removed ",req.body.itemId);
//     let userData = await userModel.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId] > 0)
//     userData.cartData[req.body.itemId] -= 1;
//     await userModel.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.json("Removed");
// }