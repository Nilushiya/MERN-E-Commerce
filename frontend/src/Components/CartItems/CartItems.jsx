import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {getTotalCartAmount, allProducts, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    // <div className='row cartItems'>
    //   <div className="col-lg-12 col-md-12 col-6 d-flex flex-row justify-content-center align-items-center formatMain">
    //     <p className=''>Products</p>
    //     <p>Title</p>
    //     <p>Price</p>
    //     <p>Quantity</p>
    //     <p>Total</p>
    //     <p>Remove</p>
    //   </div>
    //   <hr />
      <div className='addCard'>
        {allProducts.map((e) => {
          if (cartItems[e._id] > 0) {
            return (
              <div className='row addCardItems'>
                <div className="col-lg-6 col-md-6 col-12 d-flex flex-row justify-content-center align-items-center addCardImg" key={e.id} >
                  <img src={e.imageUrl} alt="" className='img-fluid rounded'width= "250px" height="300px"/>
                </div>
                <div className='col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center addCartDetails'>
                  <p >{e.name}</p>
                  <p>ONE : <span>${e.new_price}</span></p>
                  <p>QUANTITY : <span>{cartItems[e._id]}</span></p>
                  <p>TOTAL : <span>${e.new_price * cartItems[e._id]}</span></p>
                  <img src={remove} onClick={() => removeFromCart(e._id)}  alt="" />
                </div>
              </div> 
            );
          }
          return null; 
        })}
        <div className="row cardItem-down">
          <div className="col-lg-7 col-12 cartItemTotal">
            <h2>Cart Total</h2>
            <div>
              <div className="cartitems-total-item d-flex flex-row ">
                <p className='para1'>Subtotal</p>
                <p className='para2'>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item d-flex flex-row ">
                <p className='para1'>Shipping</p>
                <p className='para2'>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item d-flex flex-row">
                <p className='para1'>Total</p>
                <p className='para2 ptotal'>${getTotalCartAmount()}</p>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      
  
  );
};

export default CartItems;
