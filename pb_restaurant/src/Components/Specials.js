import React from "react";
import GreekSalad from '../Asset/greekSalad.jpg';
import Bruchetta from '../Asset/bruchetta.svg'
import LelemonDessert from '../Asset/lemon dessert.jpg'
import './Specials.css'
import { Link } from "react-router-dom";

const Specials = () => {
  const menuItems = [
    {
      img: GreekSalad,
      name: "Greek Salad",
      price: "12.00",
      text: "A delicious salad with feta, olives, and fresh vegetables.",
    },
    {
      img: Bruchetta,
      name: "Bruchetta",
      price: "9.99",
      text: "A delicious salad with feta, olives, and fresh vegetables.",
    },
    {
      img: LelemonDessert,
      name: "Lemon Dessert",
      price: "5.99",
      text: "A delicious salad with feta, olives, and fresh vegetables.",
    },
  ];

  return (
    <div id="specials">
      <div className="weekSpecials">
        <h1>This Week Specials!</h1>
        <Link to="/PageNotFound">
            <button>Online Menu</button>
        </Link>
      </div>
      <div id="menu">
        {menuItems.map((item, index) => (
        <div key={index} className="menuItem">
            <img src={item.img} alt={item.name} />
          <div className="nameAndPrice">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
            <p className="menuText">{item.text}</p>
            <div className="order-delivery">
            <Link to="/bookingPage">
            <button>Reserve a Table</button>
          </Link>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
        }

export default Specials;
