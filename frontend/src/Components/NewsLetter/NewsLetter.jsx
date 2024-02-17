import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='NewsLetter '>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subcribe to your newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter