import React from 'react';
import './testimonials.css';
function Testimonials() {
  const starRating = (
    <>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </>
  );

  const testimonialsUserProfile = [
    {
      image: "https://cdn.create.vista.com/api/media/medium/252354162/stock-photo-excited-curly-african-american-girl-smiling-while-standing-isolated-blue?token=",
      name: "Olivia Smith",
      comment: "Fantastic dining at Little Lemon! Charming ambiance, welcoming staff, and exquisite flavors. A gem in Charlotte!"


    },
    {
      image: "https://cdn.create.vista.com/api/media/medium/275756466/stock-photo-cheerful-african-american-man-showing-thumbs-while-looking-camera?token=",
      name: "Benjamin Johnson",
      comment: "Little Lemon exceeded expectations! Attention to detail, diverse menu, and every bite a burst of flavor. Must-visit!"


    },
    {
      image: "https://cdn.create.vista.com/api/media/medium/468060070/stock-photo-pleased-woman-looking-camera-while-touching-face-isolated-white?token=",
      name: "Sophia Davis",
      comment: "Special occasion at Little Lemon was fantastic. Artful presentation, unmatched taste, and top-notch culinary "
    },
    {
      image: "https://cdn.create.vista.com/api/media/medium/256808272/stock-photo-front-view-laughing-bearded-man-showing-thumbs-kitchen?token=",
      name: "Elijah Taylor",
      comment: "Little Lemon, a culinary masterpiece! Fresh, local ingredients, creative chef, and an elegant, cozy atmosphere."
    },
  ];

  return (
    <div className='testimonial'>
      <h1>What customers say!</h1>
      {testimonialsUserProfile.map((testimonial, index) => (
        <div className='testimonialsUserProfile' key={index}>
          <p>{starRating}</p>
          <div className='user-profile'>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.name}</p>
          </div>
          <p>{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
