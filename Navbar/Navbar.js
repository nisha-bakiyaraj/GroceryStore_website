import React from "react";
import "./Navbar.css";


import { GiHamburger } from "react-icons/gi";

const Navbar = () =>{
    return(
        <nav className="navbar-container">
            <div className="navbar-sub-container">
                <div className="burger-menu">
                <GiHamburger className="burger-menu-icon"/>
                    <p>shop by department</p>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Shop</a></li>
                        <li><a href="#!">Page</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                 
                </div>

            </div>
       

        </nav>
    )
}
export default Navbar;