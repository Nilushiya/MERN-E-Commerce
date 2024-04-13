import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import cart from '../../../src/cart.png'
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
    const hrStyle = {
      // border: 'none',
      // width: '80%',
      // height: '3px',
      // borderradius: '10px',
        backgroundColor: '#ff4141',
    }
    const navmenu = {
        display: 'flex',
    flexdirection: 'column',
    alignitems: 'center',
    justifycontent: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontsize:'20px',
    fontweight: '500'
    }
  return (
    // <div className='navbar'>
      <nav className="navbar navbar-expand-lg ">
        {/* <div className="container-fluid"> */}
          <Link className="nav-logo" to="/">
            {/* <div className="nav-logo"> */}
              <img src={logo} alt="" />
              <p>NIT</p>
            {/* </div> */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center" style={navmenu}>
              <li className="nav-item" onClick={() => setMenu("shop")}>
                <Link className="nav-link" to="/">Shop{menu === "shop" ? <hr style={hrStyle}/> : <></>}</Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("mens")}>
                <Link className="nav-link" to="/mens">Men{menu === "mens" ? <hr style={hrStyle}/> : <></>}</Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("womens")}>
                <Link className="nav-link" to="/womens">Women{menu === "womens" ? <hr style={hrStyle}/> : <></>}</Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("kids")}>
                <Link className="nav-link" to="/kids">Kids{menu === "kids" ? <hr style={hrStyle}/> : <></>}</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li> */}
              <div className="left">
                <Link to='/sign-in'><button type="button" >Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div id='navCount'>{getTotalCartItems()}</div>
              </div>
            </ul>
          </div>
        {/* </div> */}
      </nav>
    // </div>
  );
}

export default Navbar;



    {/* <div className="nav-logo">
            <img src={logo} alt="" />
            <p>NIT</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("shop")}>Shop{menu === "shop" ? <hr /> :<></>}</li>
            <li onClick={() => setMenu("mens")}>Men{menu === "mens" ? <hr /> :<></>}</li>
            <li onClick={() => setMenu("womens")}>Women{menu === "womens" ? <hr /> :<></>}</li>
            <li onClick={() => setMenu("kids")}>Kids{menu === "kids" ? <hr /> :<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cartIcon} alt="" />
        </div> */}
        // his 93
        // reli 94
        // sci 78
        // it 80
