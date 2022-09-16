import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {

    return (
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
        </nav>
    )
}

export default Navbar;