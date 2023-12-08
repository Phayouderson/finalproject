import React from "react";
import Restauranfood from './restauranfood.jpg'
import GreekSalad from './greekSalad.jpg'
import Phayouder from './phayouder.jpg'
import Mario from  './mario.jpg'
const main = () => {
    return(
        <main>
            <article id="home">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Charlotte</h2>
                    <p>On completion, you will have the skills necessary <br />  to take the wireframes of your design solution<br /> for your project on the reserve-a-table section of<br /> the Little Lemon website to produce high-fidelity mock-ups. </p>
                    <button>Reserve a Table</button>
                </div>
                    <img src={Restauranfood} alt="Logo" />
            </article>

            <div className="specials">
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
<section className="testimonials-cont">
  <h2>Testimonials</h2>
  <article className="article-cont">
    <div className="testimonials">
        <div className="user-profile">
            <img src={Phayouder} alt="User 1"/>
            <h3>Phayouder Borgella</h3>
        </div>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9734;</span>
        </div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu turpis vel urna aliquet ultrices. Vestibulum nec lorem in nibh pharetra lobortis."</p>
    </div>
    <div className="testimonials">
        <div className="user-profile">
            <img src={Phayouder} alt="User 1"/>
            <h3>Phayouder Borgella</h3>
        </div>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9734;</span>
        </div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu turpis vel urna aliquet ultrices. Vestibulum nec lorem in nibh pharetra lobortis."</p>
    </div>
    <div className="testimonials">
        <div className="user-profile">
            <img src={Phayouder} alt="User 1"/>
            <h3>Phayouder Borgella</h3>
        </div>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9734;</span>
        </div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu turpis vel urna aliquet ultrices. Vestibulum nec lorem in nibh pharetra lobortis."</p>
    </div>
    <div className="testimonials">
        <div className="user-profile">
            <img src={Phayouder} alt="User 1"/>
            <h3>Phayouder Borgella</h3>
        </div>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9734;</span>
        </div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu turpis vel urna aliquet ultrices. Vestibulum nec lorem in nibh pharetra lobortis."</p>
    </div>
  </article>
</section>
<section id="about">
    <div className="text2">
        <h1>Little Lemon</h1>
        <h2>Charlotte</h2>
        <p>We are a family-owned restaurant that has been serving our community for over 20 years. Our mission is to provide our customers with delicious, fresh food and a warm, welcoming atmosphere. Our menu features a variety of dishes inspired by traditional family recipes and local ingredients. Come visit us and experience our passion for food and hospitality.</p>
    </div>
        <img src={Mario} alt=" of Mario" />
</section>

</main>
    )
}

export default main;