import React from 'react'
import './ProductDisplay.css'
const ProductDisplay = (props) => {
  const {product} = props
  return (
    <div className='row ProductDisplay m-5'>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
          <img src={product.image} alt="" />
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center p-2">
          <h1>{product.name}</h1>
          <p className='productQuantity'>50</p>
          <div className="oldPrice">${product.old_price}</div>
          <div className="newPrice">${product.new_price}</div>
          <div className="productDetails">Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit. At eveniet hic autem, 
          cum quae officiis delectus non molestias nihil eius 
          voluptatum quia quibusdam ea harum eligendi maiores 
          explicabo nisi debitis!</div>
          <div className="productSize">
            <h1>Select size</h1>
            <div className="selectRightSize">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductDisplay