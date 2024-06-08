import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("home");
  return (
    <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/'><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li></Link>
          <a href="#explore-menu"><li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li></a>
          <a href="#app-download"><li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li></a>
          <a href="#footer"><li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li></a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>signin</button>
        </div>
    </div>
  )
}

export default Navbar 
