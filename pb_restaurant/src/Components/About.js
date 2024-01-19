import React from "react";
import Mario from  '../Asset/mario.jpg'
import './About.css'
const about = () => {
    return(
        <about>
            <section id="about">
    <div className="text2">
        <h1>Little Lemon</h1>
        <h2>Charlotte</h2>
        <p>We are a family-owned restaurant that has been serving our community for over 20 years. Our mission is to provide our customers with delicious, fresh food and a warm, welcoming atmosphere. Our menu features a variety of dishes inspired by traditional family recipes and local ingredients. Come visit us and experience our passion for food and hospitality.</p>
    </div>
        <img src={Mario} alt="Image of Mario" />
</section>

        </about>
    )
}
export default about;