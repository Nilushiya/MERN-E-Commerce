import React from 'react'
import './css/ShopCatedory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCatedory = (props) => {
    const {allProducts} = useContext(ShopContext);
  return (
    <div className='shopCatedory'>
        <img src={props.banner} alt="" className='img-fluid rounded' width= "100%" height="100%"/>
        <div className="indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="categorySort">
                Sort by <img src={dropdown} alt="" />
            </div>
        </div>
        <div className="row categoryProducts">
            {allProducts.map((item,i) => {
                if(props.category === item.category){
                    return (
                        <div key={i} className="col-lg-3 col-md-6 col-12">
                          <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        </div>) }              
                         else{
                    return null;
                }
            })}
        </div>
    </div>
  )
}

export default ShopCatedory