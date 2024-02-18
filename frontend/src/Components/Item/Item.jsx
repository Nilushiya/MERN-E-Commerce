import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item text-center'p-2>
        <Link to={`/product/${props.id}`}>        <img src={props.image} onClick={window.scrollTo(0,0)} alt="" className='img-fluid rounded m-2'  width= "60%" height= "auto"/>
</Link>
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