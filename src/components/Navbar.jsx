import React, { useState } from 'react'
import logo from '../assets/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[menu,setMenu] =useState('Home')
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      {/* <img src={logo} alt=''/> */}
      <p>E-cart</p>
      </div>
      <ul className='nav-menu'>
        <Link to = '/home'>
        <li onClick={()=>{setMenu('Home')}}>Home{menu==='Home'?<hr />:<></>} </li>
        </Link>
        
        <Link to = '/product'>
        <li onClick={()=>{setMenu('product')}}>Shop{menu==='product'?<hr />:<></>}</li>
        </Link>
      </ul>
      <div className='nav-button'>
        <Link to = '/login'>
        <button>Login</button>
        </Link>
        <IconButton>
        <Link to = '/cart'>
          <ShoppingCartOutlinedIcon/>
          </Link>
        </IconButton>
      </div>
    </div>
  )
}

export default Navbar