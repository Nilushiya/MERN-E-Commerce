import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

     const [allProducts , setAllProducts] = useState([]);
     const [imageFile, setImageFile] = useState([]);
     const fetchInfo = async () => {
      try {
          const response = await fetch('http://localhost:4000/product/allProduct');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          console.log(data);
          setAllProducts(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

     useEffect(() => {
      fetchInfo();
     },[]);

     const removeProduct = async(Productid) => {
      await fetch('http://localhost:4000/product/removeProduct',{
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id:Productid})
     })
     await fetchInfo();
     }
     const handleFileChange = (event, index, property) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = `http://localhost:4000/images/${file.name}`;
          setImageFile(imageUrl);
          const updatedProduct = [...allProducts];
          updatedProduct[index][property] = file;
          setAllProducts(updatedProduct);
        };
        reader.readAsDataURL(file);
      }
    };

  const handleInputChange = (e, index, property) => {
      const updatedProducts = [...allProducts];
      updatedProducts[index][property] = e.target.value;
      setAllProducts(updatedProducts);
  };

  const updateProduct = async (product) => {
      try {
          await fetch(`http://localhost:4000/product/update/${product._id}`, {
              method: 'PUT',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: product.name,
                old_price: product.old_price,
                new_price: product.new_price,
                available: product.available,
                category: product.category,
              }),
          });
          await fetchInfo();
          alert('Product updated successfully!');
      } catch (error) {
          console.error('Error updating product:', error);
      }
  };
  const updateProductImg = async (product) => {
    try {
      console.log(product._id);
        await fetch(`http://localhost:4000/product/updateImg/${product._id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imageFile }),
        });
        await fetchInfo();
        alert('Product imgage updated successfully!');
    } catch (error) {
        console.error('Error updating product:', error);
    }
};

  return (
    <div className='ListProduct'>
      <h1>All Product List</h1>
      <div className="listFormat">
        <p>Product</p>
        <p>ImgUpdate</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Available</p>
        <p>Category</p>
      </div>
      <div className="listAllProducts">
        <hr />
        {allProducts.length > 0 && allProducts.map((product,index)=>{
          return <>
            <div key={index} className="listFormat listItem">
            <img src={product.imageUrl} alt="" className='listImg'/>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, index,'imageUrl')} />
            <input type="text" value={product.name} onChange={(e) => handleInputChange(e, index, 'name')} />
            <input type="number" value={product.old_price} onChange={(e) => handleInputChange(e, index, 'old_price')} />
            <input type="number" value={product.new_price} onChange={(e) => handleInputChange(e, index, 'new_price')} />
            <input type="text" value={product.available} onChange={(e) => handleInputChange(e, index, 'available')} />
            <select value={product.category} onChange={(e) => handleInputChange(e, index, 'category')}>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
                {/* Add more options as needed */}
            </select>
            <button onClick={() => updateProductImg(product)}>UpdateImg</button>
            <button onClick={() => updateProduct(product)}>Update</button>
            <img src={cross_icon} alt="" className='removeIcon' onClick={() =>{removeProduct(product._id)}}/>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct