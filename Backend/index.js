const port = 4000;
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
app.use(express.json());
app.use(cors());


connectDB();

// app.get("/",(req,res)=>{
//     res.send("Express App is Running")
// })

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb) =>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=> {
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })


// app.post('/addproduct',async (req,res) =>{
//     const product = new Product({
//         id:req.body.id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })


// app.listen(port,(error)=>{
//     if(!error){
//         console.log("Server Running on Port : "+port);
//     }
//     else{
//         console.log("Error : "+error)
//     }
// })








// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));