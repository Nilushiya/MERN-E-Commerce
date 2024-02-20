import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    const {allProducts , CartItems ,removeFromCart} = useContext(ShopContext)
  return (
    <div className='row cartItems'>
        <div className="col-lg-12 col-md-12 col-6 d-flex  justify-content-center align-items-center formatMain">
            <p className=''>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       <div className='col-lg-12 col-md-12 clo-6'>
       {allProducts.map((e)=>{
            if(CartItems[e.id] > 0){
                <div className="format">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button>{CartItems[e.id]}</button>
                <p>${e.new_price*CartItems[e.id]}</p>
                <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            }
        })}
       </div>
    </div>
  )
}

export default CartItems