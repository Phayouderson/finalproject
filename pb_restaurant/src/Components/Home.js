import React from "react";
import Restauranfood from '../Asset/restauranfood.jpg';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
        <div className="text">
          <h1>Little Lemon</h1>
          <h2>Charlotte</h2>
          <p>Come and savor the extraordinary at Little Lemon. Whether you're a local or a visitor to Charlotte, our doors are open to welcome you for an unforgettable culinary journey. Make a reservation today and let us elevate your dining experience. </p>
          <Link to="/bookingPage">
            <button>Reserve a Table</button>
          </Link>        
        </div>
        <img src={Restauranfood} alt="Logo" />
    </div>
  );
};

export default Home;
