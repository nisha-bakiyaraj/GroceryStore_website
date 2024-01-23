import React from "react";
import "./Header.css";
import logo from "../Asset/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiHeartCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import callicon from "../Asset/callicon (2).jpg"
const Header =() => {
    return(
        <div className='header-container'>
<div className='logo-search-cont'>
    <img src={logo} alt="" />
    <div className='search-cont'>
    < BiSearchAlt className='icon'/>
        <input type="text" placeholder="search products"/>
    </div>
</div>
<div className='contact-social-cont'>
    <div className="'contact">
    <img src={callicon} alt=""/>
    <p>Call Us <span>1234567890</span></p>
</div>
<div className="social-icon-cont">
   < div className="headerIcon">
   <BiUserCircle className="headerIcon-size" />
   </div>
   < div className="headerIcon">
   <BiHeartCircle className="headerIcon-size"/>
   </div>
   < div className="headerIcon">
   
   <BiCart className="headerIcon-size"/>
</div>
        </div>
        </div></div>
    );
}
export default Header;