import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'
const Navbar = () => {
    return (
        <>
            <div className="main_div">
            <NavLink  to="/about"  >About</NavLink>
            <NavLink  to="/contact" >Contact</NavLink>
            <NavLink  to="/" >Home</NavLink>
            <NavLink  to="/users/sami/butt" >Users</NavLink>
            <NavLink  to="/search" >Search</NavLink>
            </div>
            
            
        </>
    )
}

export default Navbar
