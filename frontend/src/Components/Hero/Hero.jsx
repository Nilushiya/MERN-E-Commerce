import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import heroImg from '../Assets/hero_image.png';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const   Hero = () => {
  return (
    <div  className='hero'>
        {/* <div className="heroLeft">

        </div>
        <div className="heroRight">

        </div> */}
        <div className="row" id='heros'>
            <div className="col-lg-6 col-12 text-center mt-5  d-flex flex-column justify-content-center align-items-center" id='heroLeft'>
                <p className=''>NEW ARRIVALS ONLY</p>
                <div className='fs-1 fw-bold'>
                    <div className="heroHandIcon d-flex justify-content-center">
                        <p className=' d-flex justify-content-center align-items-center' >new</p>
                        <img src={hand} alt="" class="img-fluid rounded" width= "70px" height= "auto"/>
                    </div>
                    <p >collection</p>
                    <p>for everyone</p>
                </div>
                <div className=" heroLatestbtn d-flex justify-content-center align-items-center p-1" style={{ backgroundColor: "#1E2022"}}>
                    <div className='p-3' style={{ color: "#C9D6DF"}}>Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-12 text-center " id='heroRight'>
                <img src={heroImg} alt="" className="img-fluid rounded" width= "380px" height= "auto"/>
            </div>
        </div>
    </div>
  )
}

export default   Hero