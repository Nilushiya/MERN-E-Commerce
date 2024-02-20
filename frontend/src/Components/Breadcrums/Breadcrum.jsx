import React from 'react'
import './Breadcrum.css' 
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='Breadcrum m-5'>
        Home<img src={arrow} alt="" />Shop <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum