  import { useState} from "react"
  import './Nav.css'
  import { Link } from "react-router-dom";
  import Logo from '../Asset/logo .svg'
  import {BiMenu} from "react-icons/bi"
  import {LiaTimesSolid} from "react-icons/lia"
  const Nav = () => {
      const [nav, setNav]= useState(false)

      const handleNav =()=> setNav (!nav)
      const closeNav = () => setNav(false);

      

  return (
    <div className={`nav-container ${nav ? "active" : ""}`}>
          <div className="nav-image">
              <img src={Logo} alt="Little Lemon Logo"/>
          </div>
      <ul className={`nav-url ${nav ? "active" : ""}`}>
          <li>
          <a href="/#/" onClick={closeNav}>Home</a>
          </li>
          <li>
          <a href="#/about" onClick={closeNav}>About</a>
          </li>
          <li>
          <a href="#/PageNotFound" onClick={closeNav}>Menu</a>
          </li>
          <li>
          <a href="#/bookingPage" onClick={closeNav}>Reservations</a>
          </li>
          <li>
          <a href="#/PageNotFound" onClick={closeNav}>Order Online</a>
          </li>
          <li>
          <a href="#/PageNotFound" onClick={closeNav}>Login</a>
          </li>
        </ul>
        <div className="menu" onClick={handleNav}>
          {!nav ? (<BiMenu/>) : (<LiaTimesSolid/>)}
        </div>
      </div>
    )
  }

  export default Nav;