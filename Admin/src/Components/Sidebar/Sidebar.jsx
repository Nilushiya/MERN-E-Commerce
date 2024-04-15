import React from 'react'
import './Sidebar.css'
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Link to = {'/addproduct'} style={{textDecoration:"none"}}>
            <p className='SidebarItam'>Add Product</p>
        </Link>
        <Link to = {'/listproduct'} style={{textDecoration:"none"}}>
            <p className='SidebarItam'>List Product</p>
        </Link>
    </div>
  )
}

export default Sidebar