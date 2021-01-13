import React from 'react'
import logo from '../../images/logo.png';
import triangle from '../../images/icon.png';
import './styles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo}></img>
            <img src={triangle}></img>
        </div>
    )
}
export default Navbar;