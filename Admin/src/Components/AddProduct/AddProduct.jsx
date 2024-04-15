import React, { useState } from 'react';
import './AddProduct.css'
import upload from '../../assets/download.jpg'

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        old_price:"",
        new_price:""
    })

    const Add_Product = async() => {
        console.log(productDetails);
        console.log(selectedFile);
        console.log(imageUrl);

        let formData = new FormData();
        formData.append('name', productDetails.name);
        formData.append('category', productDetails.category);
        formData.append('old_price', productDetails.old_price);
        formData.append('new_price', productDetails.new_price);

        if (uploadMethod === 'file') {
            formData.append('image', selectedFile);
        } else {
            formData.append('image', imageUrl);
        }
    
        try {
            const response = await fetch('http://localhost:4000/product/addProduct', {
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonObject),
            }).then((res) => res.json()).then((data) =>{
                data.success?alert("Product Added"):alert("Failed")
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error uploading product:', error);
        }

    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails , [e.target.name]:e.target.value})
    }

    const imageHandler = (event) => {
        setImage(event.target.files[0]);
    };

 

   

  return (
    <div className='AddProduct'>
        <div className="addProductItem">
            <p>Product title</p>
            <input type="text" value={productDetails.name} onChange={changeHandler} name='name' placeholder='Type here'/>
        </div>
        <div className="addProductItem">
            <p>Price</p>
            <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here'/>
        </div>
        <div className="addProductItem">
            <p>Offer Price</p>
            <input type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here'/>
        </div>
        <div className="addProductItem">
            <p>Product Category</p>
            <select name='category' value={productDetails.category} onChange={changeHandler} className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
            <div className="addProductItem">
            <label htmlFor='file_input'>
                <img src={image?URL.createObjectURL(image):upload} alt='' className='uploadImg'/>
            </label>
            <input type="file" id='file_input'  name="image" hidden onChange={imageHandler} />   
            </div>
             <button className='addproduct-btn' onClick={() => {Add_Product()}}>Add</button>
        </div>
    </div>
  )
}

export default AddProduct