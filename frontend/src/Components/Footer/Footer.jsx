import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png';
import pintester from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
// import instagram from '../Assets/instagram_icon.png';


const Footer = () => {
  return (
    <div className='footer d-flex flex-column justify-content-center align-items-center p-1 m-5'>
        <div className="footerLogo d-flex flex-row justify-content-center align-items-center p-1">
            <img src={footerLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footerLinks d-flex flex-row justify-content-center align-items-center p-1">
            <li >Company</li>
            <li >Products</li>
            <li >Offices</li>
            <li >About</li>
            <li >Contact</li>
        </ul>
        <div className="socialIcon d-flex flex-row justify-content-center align-items-center p-3">
            <div className="iconContainer m-3">
                <img src={instagram} alt="" />
            </div>
            <div className="iconContainer m-3">
                <img src={pintester} alt="" />
            </div>
            <div className="iconContainer m-3">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>Copyright @ 2024 All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer