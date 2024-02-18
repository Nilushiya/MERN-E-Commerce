import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import dataProduct from '../Assets/all_product'
const RelatedProduct = (props) => {
    const {product} = props
  return (
    <div className='relatedProduct'>
        <h1>Related Product</h1>
        <hr />
        <div className="row relatedProduct-item">
        {dataProduct.map((item,i) => {
                if(product.category === item.category){
                return (
                    <div key={i} className="col-lg-3 col-md-6 col-12">
                        <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>)
                }
            })}
        </div>
    </div>
  )
}

export default RelatedProduct