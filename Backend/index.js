const port = 4000;
const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user');


db();

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











// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));