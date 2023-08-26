import React from "react";
import "./testimonials.css";
import profile from '../../assets/profile.png'

const testimonials = [
  {
    id: 1,
    name: "User 1",
    text: "Testimonial 1 content.",
    image:profile
  },
  { id: 2, name: "User 2", text: "Testimonial 2 content.", image: profile },
  { id: 3, name: "User 3", text: "Testimonial 3 content.", image: profile },

];

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h1>What Our Clients Say About Us</h1>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="profile-image">
              <img src={testimonial.image} alt="" />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
