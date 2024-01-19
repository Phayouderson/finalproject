import React from "react";
import GreekSalad from '../Asset/greekSalad.jpg';
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
      img: 'https://danavento.com/wp-content/uploads/2023/06/Pan-seared-Mackerel-with-zesty-Citrus-salad-on-a-plate-for-dinner-.jpg',
      name: "Salmon Delight",
      price: "12.00",
      text: "A delicious salad with feta, olives, and fresh vegetables.",
    },
    {
      img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x1152/hd-aspect-1504195270-lemon-pepper-chicken.jpg?resize=1200:*',
      name: "Chicken Supreme",
      price: "12.00",
      text: "A delicious salad with feta, olives, and fresh vegetables.",
    },
  ];

  return (
    <div id="specials">
      <div className="weekSpecials">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
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
            <a href="/PageNotFind">
            <button>Reserve a Table</button>
          </a>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
        }

export default Specials;
