import React from "react";
import Logo from '../Asset/logo .svg'
import './Footer.css'
const footer = () => {
    return(
        <footer>
            <div className= "logo-container">
                <img src={Logo} alt="Little Lemon Logo"/>
            </div>
            <nav className="Doormat-nav">
                <ul>
                    <h2 className="hTwo">Doormat navigation</h2>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="#orderOline">Order Oline</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </nav>
            <div className="contact-details">
                <h2 className="hTwo">Contact Us</h2>
                <p>1234 Lemon Avenue</p>
                <p>Lemon City, CA 56789</p>
                <p>Email: info@littlelemon.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div className="social-media-links">
          <ul>
          <h2 className="hTwo">Follow Us</h2>
            <li>
            <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                Facebook
            </a>
            </li>
            <li>
              <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
              Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        </footer>
    );
}
export default footer;