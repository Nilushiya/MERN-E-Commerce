import React from 'react'
import './Offer.css'
import exclusive from '../Assets/exclusive_image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Offers = () => {
  return (
    <div className='row offers'>
        <div className="col-lg-6 col-12 text-center mt-5  d-flex flex-column justify-content-center align-items-center offerLeft">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>ONLY BEST SELLERS PRODUCTS</p>
            <button>Check Nom</button>
        </div>
        <div className="col-lg-6 col-12 text-center offerRight">
            <img src={exclusive} alt="" className='img-fluid rounded'width= "380px" />
        </div>
    </div>
  )
}

export default Offers