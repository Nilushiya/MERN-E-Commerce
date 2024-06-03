import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import newCollection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {

  const [newCollection , setNewCollection] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:4000/product/newCollection')
      .then((res)=>res.json()).then((data)=>setNewCollection(data))
  },[])
console.log("new" + newCollection)
  return (
    <div className='newCollections'>
        <h2 className='text-center mt-5'>NEW COLLECTIONS</h2>
        <hr className='w-75 h-25 d-flex text-center m-5'/>
        <div className="row collections">
            {newCollection.map((item) => {
                 return (
                    <div key={item._id} className="col-lg-3 col-md-6 col-12">
                      <Item id={item._id} name={item.name} image={item.imageUrl} new_price={item.new_price} old_price={item.old_price} />
                    </div>)
            })}
        </div>
    </div>
  )
}

export default NewCollections