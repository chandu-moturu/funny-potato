import React from "react";
import "./testimonials.css";
import profile from "../../assets/profile.png";
import rating from "../../assets/images/rating.png";

const testimonials = [
  {
    id: 1,
    name: "CommunityCreator123",
    text: "This website nails both website creation and community support. Building my site was a breeze, and the community's guidance is priceless. Top-tier platform!",
    image: profile,
  },
  { id: 2, name: "NoviceWebWizard", text: "No clue about websites, but this site held my hand throughout. Community is gold—answered all questions lightning fast. Love my site now!", image: profile },
  { id: 3, name: "ArtisticCollabHub", text: "Designing masterpieces is smooth, but the community's feedback? Invaluable. A playground for collaboration and growth. Kudos!", image: profile },
];

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h1>What Our Clients Say About Us</h1>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="profile-image">
              <img src={testimonial.image} alt="" loading="lazy" />
              <img src={rating} alt="" loading="lazy" />
            </div>
            <div className="testimonial-info">
            <h3 className="testimonial-name">{testimonial.name} </h3>
            <p className="testimonial-text">{testimonial.text}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
