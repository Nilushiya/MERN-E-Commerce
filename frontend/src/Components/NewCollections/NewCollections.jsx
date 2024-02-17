import React from 'react'
import './NewCollections.css'
import newCollection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='newCollections'>
        <h2 className='text-center mt-5'>NEW COLLECTIONS</h2>
        <hr className='w-75 h-25 d-flex text-center m-5'/>
        <div className="row collections">
            {newCollection.map((item,i) => {
                 return (
                    <div key={i} className="col-lg-3 col-md-6 col-12">
                      <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>)
            })}
        </div>
    </div>
  )
}

export default NewCollections