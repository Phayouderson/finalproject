import React from "react";
import { Link } from "react-router-dom";
import Logo from './logo .svg'
const nav = () => {
    return(
      
      <nav className="header">
  <img src={Logo} alt="Little Lemon Logo"/>      
  <ul className="navbar">
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/specials">Specials</Link>
    </li>
    <li>
      <Link to="/bookingPage">Reservations</Link>
    </li>
    <li>
      <Link to="/orderOnline">Order Online</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
</nav>
    )
}
export default nav;