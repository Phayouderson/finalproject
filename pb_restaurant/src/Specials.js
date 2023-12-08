import React from "react";
import GreekSalad from './greekSalad.jpg';

const Specials = () => {
  return (
    <div> 
      <div className="Specials">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
      </div>
      <article id="menu">
        <div className="menu-item">
          <img src={GreekSalad} alt="greek salad"/>
          <div>
            <h4>Greek Salad</h4>
            <p>$12.99</p>
          </div>
          <p>you will have the skills necessary to take the wireframes of your design solution for your project on the reserve-a-table section of the Little Lemon website</p>
          <div className="order-delivery">
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="menu-item">
          <img src={GreekSalad} alt="greek salad"/>
          <div>
            <h4>Greek Salad</h4>
            <p>$12.99</p>
          </div>
          <p>you will have the skills necessary to take the wireframes of your design solution for your project on the reserve-a-table section of the Little Lemon website</p>
          <div className="order-delivery">
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="menu-item">
          <img src={GreekSalad} alt="greek salad"/>
          <div>
            <h4>Greek Salad</h4>
            <p>$12.99</p>
          </div>
          <p>you will have the skills necessary to take the wireframes of your design solution for your project on the reserve-a-table section of the Little Lemon website</p>
          <div className="order-delivery">
            <button>Order a delivery</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Specials;
