import React, { useEffect, useState } from 'react'
import './Popular.css'
// import dataProduct from '../Assets/data'
import Item from '../Item/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Popular = () => {
  const [dataProduct , setDataProduct] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:4000/product/popularWomen')
      .then((res)=>res.json()).then((data)=>setDataProduct(data))
  },[])
  console.log(dataProduct);
  return (
    <div className='popular'>
        <h1 className='text-center'>POPULAR IN WOMEN</h1>
        <hr className='w-75 h-25 d-flex text-center m-5'/>
        <div className="row popularItem m-5">
        {dataProduct.map((item) => {
          return (
            <div key={item._id} className="col-lg-3 col-md-6 col-12">
              <Item id={item._id} name={item.name} image={item.imageUrl} new_price={item.new_price} old_price={item.old_price} />
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Popular