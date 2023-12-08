import React from "react";
import Restauranfood from './restauranfood.jpg';

const Home = () => {
  return (
    <div>
      <article id="home">
        <div className="text">
          <h1>Little Lemon</h1>
          <h2>Charlotte</h2>
          <p>On completion, you will have the skills necessary <br />  to take the wireframes of your design solution<br /> for your project on the reserve-a-table section of<br /> the Little Lemon website to produce high-fidelity mock-ups. </p>
          <button>Reserve a Table</button>
        </div>
        <img src={Restauranfood} alt="Logo" />
      </article>
    </div>
  );
};

export default Home;
