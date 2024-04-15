import React, { useState } from 'react';
import './AddProduct.css'
import upload from '../../assets/download.jpg'

const AddProduct = () => {
    const [imageUrl, setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        imageUrl:"",
        category:"women",
        old_price:"",
        new_price:"",
        available:"true"
    })
    const imageHandler = (event) => {
        setImage(event.target.files[0]);
    };
    const changeHandler = (e) => {
        setProductDetails({...productDetails , [e.target.name]:e.target.value})
    }
    const Add_Product = async() => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', imageUrl);
        try {
            const response = await fetch('http://localhost:4000/product/upload', {
                method: 'POST',
                headers:{
                    Accept:'application/json',
                },
                body: formData,
            }).then((res) => res.json()).then((data) =>{
                responseData=data
            });
        } catch (error) {
            console.error('Error uploading product:', error);
        }

        if(responseData.success){
            product.imageUrl = responseData.image_url;
            console.log(product);
            // try {
                console.log(JSON.stringify(product));
                 await fetch('http://localhost:4000/product/addProduct', {
                    method: 'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                }).then((res) => res.json()).then((data) =>{
                    console.log('Response from server:', data); // Log the response data for debugging
                    if (data.success) {
                        alert("Product Added");
                    } else {
                        alert("Failed");
                    }
                });
            // } catch (error) {
            //     console.error('Error uploading product:', error);
            // }
        } 
    }

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
            <p>Available</p>
            <input type="text" value={productDetails.available} onChange={changeHandler} name='available' placeholder='Type here'/>
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
                <img src={imageUrl?URL.createObjectURL(imageUrl):upload} alt='' className='uploadImg'/>
            </label>
            <input type="file" id='file_input'  name="imageUrl" hidden onChange={imageHandler} />   
            </div>
             <button className='addproduct-btn' onClick={() => {Add_Product()}}>Add</button>
        </div>
    </div>
  )
}

export default AddProduct