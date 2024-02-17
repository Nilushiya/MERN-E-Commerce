import React from 'react'
import './Breadcrum.css' 
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrum = () => {
    const { product} = props
  return (
    <div className='Breadcrum'>
        Home<img src={arrow} alt="" />Shop <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum