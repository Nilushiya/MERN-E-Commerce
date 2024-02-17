import React from 'react'
import './Popular.css'
import dataProduct from '../Assets/data'
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Popular = () => {
  return (
    <div className='popular'>
        <h1 className='text-center'>POPULAR IN WOMEN</h1>
        <hr className='w-75 h-25 d-flex text-center m-5'/>
        <div className="row popularItem m-5">
        {dataProduct.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-12">
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Popular