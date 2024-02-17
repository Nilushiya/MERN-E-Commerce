import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item text-center'p-2>
        <img src={props.image} alt="" className='img-fluid rounded m-2'  width= "300px" height= "auto"/>
        <p>{props.name}</p>
        <div className="itemPrices">
            <div className="itemNewPrice">
                ${props.new_price}
            </div>
            <div className="itemOldPrice text-decoration-line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item