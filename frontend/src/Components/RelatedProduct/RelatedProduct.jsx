import React, { useEffect, useState } from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
// import dataProduct from '../Assets/all_product'
const RelatedProduct = (props) => {
    const {product} = props
    console.log("ppp",product)
    const [AllProduct , setAllProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/product/allProduct')
        .then((res)=>res.json()).then((data)=>setAllProduct(data))
    },[])
    console.log(AllProduct);
  return (
    <div className='relatedProduct'>
        <h1>Related Product</h1>
        <hr />
        <div className="row relatedProduct-item">
        {AllProduct.map((item) => {
                if(product.category === item.category && product._id != item._id){
                return (
                    <div key={item._id} className="col-lg-3 col-md-6 col-12">
                        <Item id={item._id} name={item.name} image={item.imageUrl} new_price={item.new_price} old_price={item.old_price} />
                    </div>)
                }
            })}
        </div>
    </div>
  )
}

export default RelatedProduct